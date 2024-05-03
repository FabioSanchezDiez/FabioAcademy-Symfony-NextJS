<?php

namespace App\Controller;

use App\Repository\SectionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;

class SectionController extends AbstractController
{

    public function __construct(private SectionRepository $sectionRepository, private SerializerInterface $serializer){}

    #[Route('/sections', name: 'sections', methods: ['GET'])]
    public function sections(): Response
    {
        $sections = $this->sectionRepository->findAll();
        $data = $this->serializer->serialize($sections, 'json', ['datetime_format' => 'Y-m-d']);

        return new Response($data, Response::HTTP_OK, ['Content-Type' => 'application/json']);
    }
}
