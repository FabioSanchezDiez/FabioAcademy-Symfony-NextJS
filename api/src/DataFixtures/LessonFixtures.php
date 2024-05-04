<?php

namespace App\DataFixtures;

use App\Entity\Lesson;
use App\Entity\Section;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class LessonFixtures extends Fixture implements DependentFixtureInterface
{
    private array $lessonsData;


    public function load(ObjectManager $manager): void
    {
        $this->initializeLessonsData();

        foreach ($this->lessonsData as $lessonInfo) {
            $section = $manager->getReference(Section::class, $lessonInfo['section_id']);
            $lesson = new Lesson($lessonInfo['title'], $lessonInfo['lesson_order'], $lessonInfo['video'], $section);
            $manager->persist($lesson);
        }

        $manager->flush();
    }

    private function initializeLessonsData(): void
    {
        $this->lessonsData = [
            [
                'title' => 'Historia del lenguaje',
                'lesson_order' => 1,
                'video' => 'https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FVideo%20de%20Presentacion.mp4?alt=media&token=0ab1007e-008f-42e2-86d9-2f50f3c5ba55',
                'section_id' => 1,
            ],
            [
                'title' => 'Instalando PyCharm',
                'lesson_order' => 1,
                'video' => 'https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FVideo%20de%20Presentacion.mp4?alt=media&token=0ab1007e-008f-42e2-86d9-2f50f3c5ba55',
                'section_id' => 2,
            ],
            [
                'title' => 'Hola Mundo en Python',
                'lesson_order' => 2,
                'video' => 'https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FVideo%20de%20Presentacion.mp4?alt=media&token=0ab1007e-008f-42e2-86d9-2f50f3c5ba55',
                'section_id' => 2,
            ],
            [
                'title' => 'Introducción a JavaScript',
                'lesson_order' => 1,
                'video' => 'https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FVideo%20de%20Presentacion.mp4?alt=media&token=0ab1007e-008f-42e2-86d9-2f50f3c5ba55',
                'section_id' => 9,
            ],
            [
                'title' => 'Manipulación del DOM con JS',
                'lesson_order' => 2,
                'video' => 'https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FVideo%20de%20Presentacion.mp4?alt=media&token=0ab1007e-008f-42e2-86d9-2f50f3c5ba55',
                'section_id' => 10,
            ],
            [
                'title' => 'Introducción a Java',
                'lesson_order' => 1,
                'video' => 'https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FVideo%20de%20Presentacion.mp4?alt=media&token=0ab1007e-008f-42e2-86d9-2f50f3c5ba55',
                'section_id' => 15,
            ],
            [
                'title' => 'Programación Orientada a Objetos',
                'lesson_order' => 2,
                'video' => 'https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FVideo%20de%20Presentacion.mp4?alt=media&token=0ab1007e-008f-42e2-86d9-2f50f3c5ba55',
                'section_id' => 16,
            ],
//            [
//                'title' => 'Introducción a C#',
//                'lesson_order' => 1,
//                'video' => 'https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FVideo%20de%20Presentacion.mp4?alt=media&token=0ab1007e-008f-42e2-86d9-2f50f3c5ba55',
//                'section_id' => 21,
//            ],
//            [
//                'title' => 'Programación Orientada a Objetos con C#',
//                'lesson_order' => 2,
//                'video' => 'https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FVideo%20de%20Presentacion.mp4?alt=media&token=0ab1007e-008f-42e2-86d9-2f50f3c5ba55',
//                'section_id' => 22,
//            ],
//            [
//                'title' => 'Sintaxis Básica de Ruby',
//                'lesson_order' => 1,
//                'video' => 'https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FVideo%20de%20Presentacion.mp4?alt=media&token=0ab1007e-008f-42e2-86d9-2f50f3c5ba55',
//                'section_id' => 27,
//            ],
//            [
//                'title' => 'Programación Orientada a Objetos en Ruby',
//                'lesson_order' => 2,
//                'video' => 'https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FVideo%20de%20Presentacion.mp4?alt=media&token=0ab1007e-008f-42e2-86d9-2f50f3c5ba55',
//                'section_id' => 28,
//            ],
//            [
//                'title' => 'Introducción a Kotlin',
//                'lesson_order' => 1,
//                'video' => 'https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FVideo%20de%20Presentacion.mp4?alt=media&token=0ab1007e-008f-42e2-86d9-2f50f3c5ba55',
//                'section_id' => 39,
//            ],
//            [
//                'title' => 'Programación Orientada a Objetos en Kotlin',
//                'lesson_order' => 2,
//                'video' => 'https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FVideo%20de%20Presentacion.mp4?alt=media&token=0ab1007e-008f-42e2-86d9-2f50f3c5ba55',
//                'section_id' => 40,
//            ],
        ];
    }

    public function getDependencies()
    {
        return [CourseFixtures::class, SectionFixtures::class];
    }
}
