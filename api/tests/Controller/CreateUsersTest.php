<?php

namespace App\Tests\Controller;

use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class CreateUsersTest extends WebTestCase
{
    private KernelBrowser $client;

    private UserRepository $userRepository;

    private EntityManagerInterface $em;

    protected function setUp(): void
    {
        $this->client = static::createClient();
        $container = static::getContainer();
        $this->userRepository = $container->get(UserRepository::class);
        $this->em = $container->get(EntityManagerInterface::class);
    }

    public function testRegisterBasicUser()
    {
        $this->client->request(
            'POST',
            '/users/create',
            [],
            [],
            [],
            json_encode(
                [
                    "name" => "Basic User",
                    "email" => "basicuser@test.com",
                    "password" => "password",
                    "isTeacher" => false
                ],
                JSON_THROW_ON_ERROR,
            ),
        );
        $response = $this->client->getResponse();
        $user = $this->userRepository->findOneBy(["email" => "basicuser@test.com"]);

        $this->assertNotNull($user);
        $this->assertNotNull($user->getToken());
        $this->assertEquals(201, $response->getStatusCode());
        $this->assertEquals("Basic User", $user->getName());
        $this->assertEquals("basicuser@test.com", $user->getEmail());
        $this->assertFalse($user->isConfirmed());
        $this->assertContains("ROLE_USER", $user->getRoles());
        $this->em->remove($user);
        $this->em->flush();

    }

    public function testRegisterTeacherUser(): void
    {
        $this->client->request(
            'POST',
            '/users/create',
            [],
            [],
            [],
            json_encode(
                [
                    "name" => "Teacher User",
                    "email" => "teacheruser@test.com",
                    "password" => "password",
                    "isTeacher" => true
                ],
                JSON_THROW_ON_ERROR,
            ),
        );
        $response = $this->client->getResponse();
        $user = $this->userRepository->findOneBy(["email" => "teacheruser@test.com"]);

        $this->assertNotNull($user);
        $this->assertNotNull($user->getToken());
        $this->assertEquals(201, $response->getStatusCode());
        $this->assertEquals("Teacher User", $user->getName());
        $this->assertEquals("teacheruser@test.com", $user->getEmail());
        $this->assertFalse($user->isConfirmed());
        $this->assertContains("ROLE_TEACHER", $user->getRoles());
        $this->em->remove($user);
        $this->em->flush();
    }

    public function testRegisterAndConfirmUser()
    {
        $this->client->request(
            'POST',
            '/users/create',
            [],
            [],
            [],
            json_encode(
                [
                    "name" => "User",
                    "email" => "user@test.com",
                    "password" => "password",
                    "isTeacher" => false
                ],
                JSON_THROW_ON_ERROR,
            ),
        );
        $response = $this->client->getResponse();
        $user = $this->userRepository->findOneBy(["email" => "user@test.com"]);

        $this->assertNotNull($user);
        $this->assertNotNull($user->getToken());
        $this->assertEquals(201, $response->getStatusCode());
        $this->assertEquals("User", $user->getName());
        $this->assertEquals("user@test.com", $user->getEmail());
        $this->assertFalse($user->isConfirmed());
        $this->assertContains("ROLE_USER", $user->getRoles());

        $this->client->request(
            'PUT',
            '/users/confirm/' . $user->getToken(),
        );

        $user = $this->userRepository->findOneBy(["email" => "user@test.com"]);
        $this->assertNull($user->getToken());
        $this->assertTrue($user->isConfirmed());

        $this->em->remove($user);
        $this->em->flush();
    }
}