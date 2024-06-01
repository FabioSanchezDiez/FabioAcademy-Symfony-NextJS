<?php

namespace App\Tests\Controller;

use App\Repository\CourseRepository;
use App\Repository\UserRepository;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class CreateCoursesTest extends WebTestCase
{
    private KernelBrowser $client;

    private JWTTokenManagerInterface $jwtManager;

    private UserRepository $userRepository;

    private  CourseRepository $courseRepository;

    private EntityManagerInterface $em;

    protected function setUp(): void
    {
        $this->client = static::createClient();
        $container = static::getContainer();
        $this->jwtManager = $container->get(JWTTokenManagerInterface::class);
        $this->userRepository = $container->get(UserRepository::class);
        $this->courseRepository = $container->get(CourseRepository::class);
        $this->em = $container->get(EntityManagerInterface::class);
    }

    public function testCreateCourse()
    {
        $user = $this->userRepository->findOneByEmail('fabiocode@gmail.com');
        $token = $this->jwtManager->createFromPayload($user, ['email' => $user->getEmail()]);

        $this->client->request(
            'POST',
            '/courses/create',
            [],
            [],
            ['HTTP_AUTHORIZATION' => 'Bearer ' . $token],
            json_encode(
                [
                    "name" => "Programación en Python 2 - Desde Principiante hasta Experto",
                    "description" => "Curso completo que abarca todos los aspectos de la programación en Python. Desde los conceptos más básicos hasta las técnicas avanzadas y aplicaciones prácticas en el mundo real. Aprenderás a desarrollar proyectos Python desde cero y a convertirte en un experto en el lenguaje.",
                    "registered_users" => "24000",
                    "publication_date" => "2024-01-13",
                    "image" => "https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FPyhton%20Curso.png?alt=media&token=2128f45d-22d9-45da-8db8-9f01e850e08c",
                    "category" => "Programación",
                    "owner_email" => "fabiocode@gmail.com"
                ],
                JSON_THROW_ON_ERROR,
            ),
        );
        $response = $this->client->getResponse();
        $content = json_decode($response->getContent(), true);
        $course = $this->courseRepository->find($content["id"]);

        $this->assertNotNull($course);
        $this->assertEquals(201, $response->getStatusCode());
        $this->assertEquals("Programación en Python 2 - Desde Principiante hasta Experto", $course->getName());
        $this->assertEquals("Curso completo que abarca todos los aspectos de la programación en Python. Desde los conceptos más básicos hasta las técnicas avanzadas y aplicaciones prácticas en el mundo real. Aprenderás a desarrollar proyectos Python desde cero y a convertirte en un experto en el lenguaje.", $course->getDescription());
        $this->assertEquals(24000, $course->getRegisteredUsers());
        $this->assertEquals(new DateTime("2024-01-13"), $course->getPublicationDate());
        $this->assertEquals("https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FPyhton%20Curso.png?alt=media&token=2128f45d-22d9-45da-8db8-9f01e850e08c", $course->getImage());
        $this->assertEquals("Programación", $course->getCategory());
        $this->assertEquals($user, $course->getOwner());
        $this->em->remove($course);
        $this->em->flush();
    }

}