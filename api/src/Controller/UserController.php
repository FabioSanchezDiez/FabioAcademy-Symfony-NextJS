<?php

namespace App\Controller;

use App\Repository\UserRepository;
use App\Service\UserService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class UserController extends AbstractController
{
    #[Route('/users/create', name: 'users_create', methods: ['POST'])]
    public function createUser(Request $request, UserService $userService): JsonResponse
    {
        $userData = json_decode($request->getContent(), true);
        $userService->registerUser($userData);

        return new JsonResponse(["success" => "Usuario creado correctamente"], Response::HTTP_CREATED);
    }

    #[Route('/users/confirm/{token}', name: 'users_confirm', methods: ['PUT'])]
    public function confirmUser(UserService $userService, string $token): JsonResponse
    {
        $success = $userService->confirmUser($token);
        if(!$success) return new JsonResponse(["error" => "Usuario no existente o token no valido"], Response::HTTP_NOT_FOUND);

        return new JsonResponse(["success" => "Usuario confirmado correctamente"], Response::HTTP_OK);
    }

    #[Route('/users/courses/enroll', name: 'users_courses_enroll', methods: ['POST'])]
    public function enrollUserInCourse(Request $request, UserService $userService ): JsonResponse
    {
        $userData = json_decode($request->getContent(), true);
        $userService->enrollUser($userData);

        return new JsonResponse(["success" => "Usuario inscrito correctamente"], Response::HTTP_OK);
    }
}
