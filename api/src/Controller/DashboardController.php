<?php

namespace App\Controller;

use App\Repository\LessonRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class DashboardController extends AbstractController
{

    public function __construct(private LessonRepository $lessonRepository, private SerializerInterface $serializer)
    {}

    #[Route('/dashboard', name: 'app_dashboard')]
    public function index(): JsonResponse
    {
        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/DashboardController.php',
        ]);
    }

    #[Route('/lessons/id/{id}', name: 'lessons_id', methods: ['GET'])]
    public function lessonById(int $id): Response
    {
        $course = $this->lessonRepository->find($id);
        $data = $this->serializer->serialize($course, 'json', ['datetime_format' => 'Y-m-d']);

        return new Response($data, Response::HTTP_OK, ['Content-Type' => 'application/json']);
    }
}