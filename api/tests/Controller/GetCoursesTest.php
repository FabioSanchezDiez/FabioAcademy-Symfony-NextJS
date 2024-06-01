<?php

namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class GetCoursesTest extends WebTestCase
{
    private KernelBrowser $client;

    protected function setUp(): void
    {
        $this->client = static::createClient();
    }

    public function testGetCourseById()
    {
        $this->client->request("GET", "/courses/id/1");
        $response = $this->client->getResponse();
        $this->assertEquals(200, $response->getStatusCode());
        $this->assertTrue(
            $response->headers->contains('Content-Type', 'application/json'),
            'Content-Type is not application/json'
        );

        $responseJson = json_decode($response->getContent(), true);
        $expectedJson = [
            "id" => 1,
            "name" => "Programación en Python - Desde Principiante hasta Experto",
            "description" => "Curso completo que abarca todos los aspectos de la programación en Python. Desde los conceptos más básicos hasta las técnicas avanzadas y aplicaciones prácticas en el mundo real. Aprenderás a desarrollar proyectos Python desde cero y a convertirte en un experto en el lenguaje.",
            "registeredUsers" => 24000,
            "publicationDate" => "2024-01-13",
            "image" => "https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FPyhton%20Curso.png?alt=media&token=2128f45d-22d9-45da-8db8-9f01e850e08c",
            "category" => "Programación"
        ];

        $this->assertJsonStringEqualsJsonString(json_encode($expectedJson), json_encode($responseJson));

    }

    public function testFirstFiveCoursesPaginated()
    {
        $this->client->request("GET", "/courses/paginated/1/5");
        $response = $this->client->getResponse();
        $this->assertEquals(200, $response->getStatusCode());
        $this->assertTrue(
            $response->headers->contains('Content-Type', 'application/json'),
            'Content-Type is not application/json'
        );

        $responseJson = json_decode($response->getContent(), true);
        $expectedJson = [
            "courses" => [
                [
                    "id" => 1,
                    "name" => "Programación en Python - Desde Principiante hasta Experto",
                    "image" => "https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FPyhton%20Curso.png?alt=media&token=2128f45d-22d9-45da-8db8-9f01e850e08c",
                    "registeredUsers" => 24000
                ],
                [
                    "id" => 2,
                    "name" => "Desarrollo Web con JavaScript - Construye tu Sitio desde Cero",
                    "image" => "https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FJavaScript%20Curso.png?alt=media&token=21e81e2f-b36f-498c-bdb8-4193b49b12f8",
                    "registeredUsers" => 22500
                ],
                [
                    "id" => 3,
                    "name" => "Dominando Java - Curso Completo Desde 0 para Estudiantes",
                    "image" => "https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FJava%20Curso.png?alt=media&token=ebf6d868-f1c8-49c5-9fce-7e8edf964ffd",
                    "registeredUsers" => 23000
                ],
                [
                    "id" => 4,
                    "name" => "C# en Acción - Aprende Programación Orientada a Objetos",
                    "image" => "https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FC%23%20Curso.png?alt=media&token=03b112f5-5284-4d86-8481-d3699effb83c",
                    "registeredUsers" => 16000
                ],
                [
                    "id" => 5,
                    "name" => "Ruby para Todos - Desde Novato hasta Rubyista",
                    "image" => "https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FRuby%20Curso.png?alt=media&token=2ef014b8-ac00-4515-bf26-d5b6d1687942",
                    "registeredUsers" => 1200
                ]
            ],
            "currentPage" => 1,
            "totalPages" => 5
        ];

        $this->assertJsonStringEqualsJsonString(json_encode($expectedJson), json_encode($responseJson));
    }

    public function testGetCoursesLikeJava()
    {
        $this->client->request("GET", "/courses/like/java/1/10");
        $response = $this->client->getResponse();
        $this->assertEquals(200, $response->getStatusCode());
        $this->assertTrue(
            $response->headers->contains('Content-Type', 'application/json'),
            'Content-Type is not application/json'
        );

        $responseJson = json_decode($response->getContent(), true);
        $expectedJson = [
            "courses" => [
                [
                    "id" => 2,
                    "name" => "Desarrollo Web con JavaScript - Construye tu Sitio desde Cero",
                    "image" => "https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FJavaScript%20Curso.png?alt=media&token=21e81e2f-b36f-498c-bdb8-4193b49b12f8",
                    "registeredUsers" => 22500
                ],
                [
                    "id" => 3,
                    "name" => "Dominando Java - Curso Completo Desde 0 para Estudiantes",
                    "image" => "https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FJava%20Curso.png?alt=media&token=ebf6d868-f1c8-49c5-9fce-7e8edf964ffd",
                    "registeredUsers" => 23000
                ]
            ],
            "currentPage" => 1,
            "totalPages" => 1
        ];


        $this->assertJsonStringEqualsJsonString(json_encode($expectedJson), json_encode($responseJson));

    }

}