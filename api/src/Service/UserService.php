<?php

namespace App\Service;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserService
{
    public function __construct(private UserPasswordHasherInterface $passwordHasher, private UserRepository $userRepository){}

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