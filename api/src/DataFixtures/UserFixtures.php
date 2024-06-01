<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class UserFixtures extends Fixture
{
    private array $usersData;
    public function load(ObjectManager $manager): void
    {
        $this->initializeUsersData();

        foreach ($this->usersData as $userInfo) {
            $user = new User();
            $user->setName($userInfo['name']);
            $user->setEmail($userInfo['email']);
            $user->setPassword($userInfo['password']);
            $user->setAdmin($userInfo['isAdmin']);
            $user->setConfirmed($userInfo['isConfirmed']);
            $user->setRoles($userInfo['roles']);
            $manager->persist($user);
        }

        $manager->flush();
    }

    private function initializeUsersData(): void
    {
        $this->usersData = [
            [
                'name' => 'Fabio',
                'email' => 'fabiocode@gmail.com',
                'password' => '$2y$13$JKAHm8CB0DjWgMpm2wXgoeEPiKvbumY6cTLKMpZcCf6uGI1Tz8or6',
                'isAdmin' => false,
                'isConfirmed' => true,
                'roles' => ["ROLE_USER", "ROLE_TEACHER"]
            ],
            [
                'name' => 'Admin User',
                'email' => 'admin@example.com',
                'password' => '$2y$13$JKAHm8CB0DjWgMpm2wXgoeEPiKvbumY6cTLKMpZcCf6uGI1Tz8or6',
                'isAdmin' => true,
                'isConfirmed' => true,
                'roles' => ["ROLE_USER", "ROLE_ADMIN"]
            ],
            [
                'name' => 'User',
                'email' => 'user@example.com',
                'password' => '$2y$13$JKAHm8CB0DjWgMpm2wXgoeEPiKvbumY6cTLKMpZcCf6uGI1Tz8or6',
                'isAdmin' => false,
                'isConfirmed' => true,
                'roles' => ["ROLE_USER"]
            ]
        ];
    }
}
