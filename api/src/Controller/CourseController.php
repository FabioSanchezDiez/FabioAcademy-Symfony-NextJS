<?php

namespace App\Controller;

use App\Entity\Course;
use App\Repository\CourseRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
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
        $course = $this->courseRepository->find($id);
        $data = $this->serializer->serialize($course, 'json', ['datetime_format' => 'Y-m-d']);

        return new Response($data, Response::HTTP_OK, ['Content-Type' => 'application/json']);
    }

//    #[Route('/courses2', name: 'courses2', methods: ['POST'])]
//    public function courses2(Request $request): Response
//    {
//        $courseData = json_decode($request->getContent(), true);
//        $course = new Course($courseData["name"], $courseData["description"], $courseData["registered_users"], $courseData["publication_date"], $courseData["image"], $courseData["category"]);
//        $data = $this->serializer->serialize($course, 'json', ['datetime_format' => 'Y-m-d']);
//
//        return new Response($data, Response::HTTP_CREATED, ['Content-Type' => 'application/json']);
//    }
}
