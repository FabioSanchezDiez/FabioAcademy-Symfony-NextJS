<?php

namespace App\DataFixtures;

use App\Entity\Course;
use App\Entity\Section;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class SectionFixtures extends Fixture implements DependentFixtureInterface
{
    private array $sectionsData;


    public function load(ObjectManager $manager): void
    {
        $this->initializeSectionsData();

        foreach ($this->sectionsData as $sectionInfo) {
            $course = $manager->getReference(Course::class, $sectionInfo['course_id']);
            $section = new Section($sectionInfo['title'], $sectionInfo['section_order'], $course);
            $manager->persist($section);
        }

        $manager->flush();
    }

    private function initializeSectionsData(): void
    {
        $this->sectionsData = [
            [
                'title' => 'Introducción a Python',
                'section_order' => 1,
                'course_id' => 1
            ],
            [
                'title' => 'Primeros pasos',
                'section_order' => 2,
                'course_id' => 1
            ],
            [
                'title' => 'Variables',
                'section_order' => 3,
                'course_id' => 1
            ],
            [
                'title' => 'Condicionales',
                'section_order' => 4,
                'course_id' => 1
            ],
            [
                'title' => 'Bucles',
                'section_order' => 5,
                'course_id' => 1
            ],
            [
                'title' => 'Listas y tuplas',
                'section_order' => 6,
                'course_id' => 1
            ],
            [
                'title' => 'POO',
                'section_order' => 7,
                'course_id' => 1
            ],
            [
                'title' => 'Python avanzado',
                'section_order' => 8,
                'course_id' => 1
            ],
            [
                'title' => 'Introducción a JavaScript',
                'section_order' => 1,
                'course_id' => 2
            ],
            [
                'title' => 'Manipulación del DOM',
                'section_order' => 2,
                'course_id' => 2
            ],
            [
                'title' => 'Desarrollo de Aplicaciones Web',
                'section_order' => 3,
                'course_id' => 2
            ],
            [
                'title' => 'AJAX y API REST',
                'section_order' => 4,
                'course_id' => 2
            ],
            [
                'title' => 'Frameworks de JavaScript',
                'section_order' => 5,
                'course_id' => 2
            ],
            [
                'title' => 'Proyecto Final',
                'section_order' => 6,
                'course_id' => 2
            ],
            [
                'title' => 'Introducción a Java',
                'section_order' => 1,
                'course_id' => 3
            ],
            [
                'title' => 'Programación Orientada a Objetos',
                'section_order' => 2,
                'course_id' => 3
            ],
            [
                'title' => 'Estructuras de Datos',
                'section_order' => 3,
                'course_id' => 3
            ],
            [
                'title' => 'Desarrollo de Aplicaciones Java',
                'section_order' => 4,
                'course_id' => 3
            ],
            [
                'title' => 'Spring Framework',
                'section_order' => 5,
                'course_id' => 3
            ],
            [
                'title' => 'Proyecto Final',
                'section_order' => 6,
                'course_id' => 3
            ],
        ];
    }

    public function getDependencies(): array
    {
        return [CourseFixtures::class];
    }
}
