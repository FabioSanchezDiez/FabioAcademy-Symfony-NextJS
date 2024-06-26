<?php

namespace App\Controller;

use App\Repository\CourseRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;

class CourseController extends AbstractController
{
    private const DATETIME_FORMAT = ['datetime_format' => 'Y-m-d'];

    public function __construct(private CourseRepository $courseRepository, private SerializerInterface $serializer){}

    #[Route('/courses', name: 'courses', methods: ['GET'])]
    public function courses(): Response
    {
        $courses = $this->courseRepository->findAll();
        $data = $this->serializer->serialize($courses, 'json', self::DATETIME_FORMAT);

        return new Response($data, Response::HTTP_OK, ['Content-Type' => 'application/json']);
    }

    #[Route('/courses/paginated/{page}/{size}', name: 'courses_paginated', methods: ['GET'])]
    public function coursesPaginated(int $page, int $size): Response
    {
        $courses = $this->courseRepository->findAllPaginated($page,$size);
        $data = $this->serializer->serialize($courses, 'json', self::DATETIME_FORMAT);

        return new Response($data, Response::HTTP_OK, ['Content-Type' => 'application/json']);
    }

    #[Route('/courses/paginated/filter/{page}/{size}', name: 'courses_paginated_filter', methods: ['POST'])]
    public function coursesPaginatedFilter(Request $request, int $page, int $size): Response
    {
        $categories = json_decode($request->getContent(), true)["categories"];
        $courses = $this->courseRepository->findPaginatedFilter($page,$size, $categories);
        $data = $this->serializer->serialize($courses, 'json', self::DATETIME_FORMAT);

        return new Response($data, Response::HTTP_OK, ['Content-Type' => 'application/json']);
    }

    #[Route('/courses/id/{id}', name: 'courses_id', methods: ['GET'])]
    public function courseById(int $id): Response
    {
        $course = $this->courseRepository->find($id);
        $data = $this->serializer->serialize($course, 'json', self::DATETIME_FORMAT);

        return new Response($data, Response::HTTP_OK, ['Content-Type' => 'application/json']);
    }

    #[Route('/courses/between/{min}/{max}/{maxResults}', name: 'courses_between', methods: ['GET'])]
    public function coursesBetweenRegisteredUsers(int $min, int $max, int $maxResults): Response
    {
        $courses = $this->courseRepository->findByRegisteredUsers($min, $max, $maxResults);
        $data = $this->serializer->serialize($courses, 'json', self::DATETIME_FORMAT);

        return new Response($data, Response::HTTP_OK, ['Content-Type' => 'application/json']);
    }

    #[Route('/courses/like/{condition}/{page}/{size}', name: 'courses_like', methods: ['GET'])]
    public function coursesLikeName(string $condition, int $page, int $size): Response
    {
        $courses = $this->courseRepository->findLikeName($page, $size, $condition);
        $data = $this->serializer->serialize($courses, 'json', self::DATETIME_FORMAT);

        return new Response($data, Response::HTTP_OK, ['Content-Type' => 'application/json']);
    }

    #[Route('/courses/popular', name: 'courses_most_popular', methods: ['GET'])]
    public function mostPopularCourse(): Response
    {
        $course = $this->courseRepository->findMostPopularCourse();
        $data = $this->serializer->serialize($course, 'json', self::DATETIME_FORMAT);

        return new Response($data, Response::HTTP_OK, ['Content-Type' => 'application/json']);
    }

    #[Route('/courses/users/{email}/{page}/{size}', name: 'courses_users_email', methods: ['GET'])]
    public function coursesByUser(int $page, int $size,string $email): Response
    {
        $course = $this->courseRepository->findCoursesByUser($page, $size, $email);
        $data = $this->serializer->serialize($course, 'json', self::DATETIME_FORMAT);

        return new Response($data, Response::HTTP_OK, ['Content-Type' => 'application/json']);
    }

    #[Route('/courses/users/owner/{email}/{page}/{size}', name: 'courses_users_owner_email', methods: ['GET'])]
    public function coursesByOwner(int $page, int $size,string $email): Response
    {
        $course = $this->courseRepository->findOwnedCoursesByOwnerEmail($page, $size, $email);
        $data = $this->serializer->serialize($course, 'json', self::DATETIME_FORMAT);

        return new Response($data, Response::HTTP_OK, ['Content-Type' => 'application/json']);
    }

    #[Route('/courses/create', name: 'courses_create', methods: ['POST'])]
    public function createCourse(Request $request): Response
    {
        $courseData = json_decode($request->getContent(), true);
        $course = $this->courseRepository->createCourse($courseData);
        $data = $this->serializer->serialize($course, 'json', self::DATETIME_FORMAT);

        return new Response($data, Response::HTTP_CREATED, ['Content-Type' => 'application/json']);
    }

    #[Route('/courses/delete/{id}', name: 'courses_delete', methods: ['DELETE'])]
    public function deleteCourse(int $id): Response
    {
        $this->courseRepository->deleteCourseById($id);
        return new JsonResponse(["success" => "Curso eliminado"], Response::HTTP_OK);
    }
}
