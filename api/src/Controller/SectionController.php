<?php

namespace App\Controller;

use App\Repository\SectionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
        $data = $this->serializer->serialize($sections, 'json');

        return new Response($data, Response::HTTP_OK, ['Content-Type' => 'application/json']);
    }

    #[Route('/sections/course/{id}', name: 'sections_course', methods: ['GET'])]
    public function sectionsByCourse(int $id): Response
    {
        $sections = $this->sectionRepository->findSectionsByCourse($id);
        $data = $this->serializer->serialize($sections, 'json');

        return new Response($data, Response::HTTP_OK, ['Content-Type' => 'application/json']);
    }
}
