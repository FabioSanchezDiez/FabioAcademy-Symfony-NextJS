<?php

namespace App\Service;

use Doctrine\ORM\Query;
use Knp\Component\Pager\PaginatorInterface;

class CourseService
{
    public function __construct(private PaginatorInterface $paginator, private AutoMapperService $mapper){}

    public function returnPaginatedResponse(Query $query, int $page, int $pageSize): array{
        $pagination = $this->paginator->paginate($query, $page, $pageSize);
        $courses = $pagination->getItems();
        $currentPage = $pagination->getCurrentPageNumber();
        $totalPages = $pagination->getTotalItemCount() / $pagination->getItemNumberPerPage();

        return [
            'courses' => $this->mapper->mapCourses($courses),
            'currentPage' => $currentPage,
            'totalPages' => intval(ceil($totalPages)),
        ];
    }
}