<?php

namespace App\DataFixtures;

use App\Entity\Course;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class CourseFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $course = new Course();
        $course->setName('Programación en Python - Desde Principiante hasta Experto');
        $course->setDescription('Curso completo que abarca todos los aspectos de la programación en Python. Desde los conceptos más básicos hasta las técnicas avanzadas y aplicaciones prácticas en el mundo real. Aprenderás a desarrollar proyectos Python desde cero y a convertirte en un experto en el lenguaje.');
        $course->setRegisteredUsers(24000);
        $course->setPublicationDate(new \DateTime('2024-01-13'));
        $course->setImage('https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FPyhton%20Curso.png?alt=media&token=2128f45d-22d9-45da-8db8-9f01e850e08c');
        $course->setCategory('Programación');
        $manager->persist($course);
        $manager->flush();
    }
}
