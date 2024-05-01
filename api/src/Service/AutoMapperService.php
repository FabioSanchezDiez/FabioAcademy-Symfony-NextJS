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
        $config = new AutoMapperConfig();
        $config->registerMapping(Course::class, CourseDTO::class);
        $this->mapper = new AutoMapper($config);
        return $this->mapper->map($course, CourseDTO::class);
    }
}