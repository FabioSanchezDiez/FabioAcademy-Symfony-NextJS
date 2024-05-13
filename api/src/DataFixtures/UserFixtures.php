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
                'password' => '$2a$10$VkQsctMldlG9LJW6vV68pezIfMQd0Mu91.Kb.IaIHMkU653sgDSsm',
                'isAdmin' => false,
                'isConfirmed' => true,
                'roles' => ["ROLE_USER"]
            ],
            [
                'name' => 'Admin User',
                'email' => 'admin@example.com',
                'password' => '$2a$10$MnL34SeVKYvvE5SSvtM7wuTODgg4uzyGOfjrl0Ln4XLZE7o7w1cbm',
                'isAdmin' => true,
                'isConfirmed' => false,
                'roles' => ["ROLE_USER", "ROLE_ADMIN"]
            ]
        ];
    }
}
