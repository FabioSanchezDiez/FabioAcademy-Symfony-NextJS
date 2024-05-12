<?php

namespace App\Service;

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
        $user->setToken($this->generateConfirmationToken());

        $hashedPassword = $this->passwordHasher->hashPassword($user, $userData['password']);
        $user->setPassword($hashedPassword);

        $this->userRepository->createUser($user);

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