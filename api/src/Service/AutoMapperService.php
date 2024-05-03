<?php

namespace App\Service;

use App\DTO\CourseDTO;
use App\Entity\Course;
use AutoMapperPlus\AutoMapper;
use AutoMapperPlus\Configuration\AutoMapperConfig;

class AutoMapperService
{
    private AutoMapper $mapper;

    public function mapCourse(Course $course): CourseDTO
    {
        $this->initializeCourseMapper();
        return $this->mapper->map($course, CourseDTO::class);
    }

    public function mapCourses(array $courses): array
    {
        $this->initializeCourseMapper();
        $coursesDto = [];
        foreach ($courses as $course) {
            $coursesDto[] = $this->mapper->map($course, CourseDTO::class);
        }
        return $coursesDto;
    }

    private function initializeCourseMapper(): void
    {
        $config = new AutoMapperConfig();
        $config->registerMapping(Course::class, CourseDTO::class);
        $this->mapper = new AutoMapper($config);
    }
}