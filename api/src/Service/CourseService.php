<?php

namespace App\Service;

use App\Entity\Course;
use Doctrine\ORM\EntityManagerInterface;

class CourseService
{
    public function __construct(private EntityManagerInterface $entityManager){}

    public function createCourse(array $courseData): Course
    {
        $course = new Course($courseData["name"], $courseData["description"], $courseData["registered_users"], new \DateTime($courseData["publication_date"]), $courseData["image"], $courseData["category"]);
        $this->entityManager->persist($course);
        $this->entityManager->flush();

        return $course;
    }

}