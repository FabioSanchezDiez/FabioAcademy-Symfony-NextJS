<?php

namespace App\Controller;

use App\Entity\Course;
use App\Repository\CourseRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class CourseController extends AbstractController
{
    public function __construct(private CourseRepository $courseRepository, private SerializerInterface $serializer){}

    #[Route('/courses', name: 'courses', methods: ['GET'])]
    public function courses(): Response
    {
        $courses = $this->courseRepository->findAll();
        $data = $this->serializer->serialize($courses, 'json', ['datetime_format' => 'Y-m-d']);

        return new Response($data, Response::HTTP_OK, ['Content-Type' => 'application/json']);
    }

    #[Route('/courses/{id}', name: 'courses_id', methods: ['GET'])]
    public function courseById(int $id): Response
    {
        $courses = $this->courseRepository->find($id);
        $data = $this->serializer->serialize($courses, 'json', ['datetime_format' => 'Y-m-d']);

        return new Response($data, Response::HTTP_OK, ['Content-Type' => 'application/json']);
    }
}
