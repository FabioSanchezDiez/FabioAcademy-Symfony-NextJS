<?php

namespace App\Service;

use Doctrine\ORM\Query;
use Knp\Component\Pager\PaginatorInterface;

class CourseService
{
    public function __construct(private PaginatorInterface $paginator, private AutoMapperService $mapper){}

    public function returnPaginatedResponse(Query $query, int $page, int $pageSize, bool $withFirstLesson = false): array{
        $pagination = $this->paginator->paginate($query, $page, $pageSize);
        $courses = $pagination->getItems();

        if($withFirstLesson){
            $coursesWithLessons = [];
            foreach ($courses as $course){
                $sections = $course->getSections();
                $firstLesson = count($sections) >= 1 ? $sections[0]->getLessons()[0] : null;
                $coursesWithLessons[] = [
                    'course' => $course,
                    'firstLesson' => $firstLesson,
                ];
            }
        }

        $currentPage = $pagination->getCurrentPageNumber();
        $totalPages = $pagination->getTotalItemCount() / $pagination->getItemNumberPerPage();

        return [
            'courses' => $withFirstLesson ? $coursesWithLessons : $this->mapper->mapCourses($courses),
            'currentPage' => $currentPage,
            'totalPages' => intval(ceil($totalPages)),
        ];
    }
}