<?php

namespace App\Service;

use App\Entity\Course;
use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserService
{
    public function __construct(private UserPasswordHasherInterface $passwordHasher, private UserRepository $userRepository, private EmailService $emailService, private EntityManagerInterface $entityManager){}

    public function registerUser(array $userData): void
    {
        $user = new User();
        $user->setName($userData['name']);
        $user->setEmail($userData['email']);
        $user->setAdmin(false);
        $user->setConfirmed(false);
        $user->setRoles($userData["isTeacher"] === true ? ["ROLE_USER", "ROLE_TEACHER"] : ["ROLE_USER"]);
        $user->setToken($this->generateConfirmationToken());

        $hashedPassword = $this->passwordHasher->hashPassword($user, $userData['password']);
        $user->setPassword($hashedPassword);

        $this->userRepository->createOrUpdateUser($user);

        $this->emailService->sendConfirmationEmail($user->getName(), $user->getEmail(), $user->getToken());
    }

    public function confirmUser(string $token): bool
    {
        $user = $this->userRepository->findOneBy(["token" => $token]);
        if(!$user) return false;
        $user->setConfirmed(true);
        $user->setToken(null);
        $this->entityManager->flush();
        return true;
    }

    public function enrollUser(array $userData): void
    {
        $courseRepository = $this->entityManager->getRepository(Course::class);

        $user = $this->userRepository->findOneBy(["email" => $userData["email"]]);
        $course = $courseRepository->find($userData["courseId"]);

        if ($user && $course) {
            if ($user->getCourses()->contains($course)) {
                throw new \Exception("Usuario ya inscrito en el curso");
            }
            $user->addCourse($course);
            $this->userRepository->createOrUpdateUser($user);
        }
    }

    public function checkValidPassword(array $userData): bool
    {
        $user = $this->userRepository->findOneBy(['email' => $userData['email']]);
        return $this->passwordHasher->isPasswordValid($user, $userData['password']);
    }

    private function generateConfirmationToken(): string
    {
        return bin2hex(random_bytes(32));
    }
}