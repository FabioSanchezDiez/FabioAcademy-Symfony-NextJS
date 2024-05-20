<?php

namespace App\Repository;

use App\DTO\CourseDTO;
use App\Entity\Course;
use App\Service\AutoMapperService;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Knp\Component\Pager\PaginatorInterface;

/**
 * @extends ServiceEntityRepository<Course>
 *
 * @method Course|null find($id, $lockMode = null, $lockVersion = null)
 * @method Course|null findOneBy(array $criteria, array $orderBy = null)
 * @method Course[]    findAll()
 * @method Course[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CourseRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry, private PaginatorInterface $paginator, private AutoMapperService $mapper, private EntityManagerInterface $entityManager)
    {
        parent::__construct($registry, Course::class);
    }

    /**
     * @param int $page
     * @param int $pageSize
     * @return array Returns an array of Course objects paginated
     */
    public function findAllPaginated(int $page, int $pageSize): array
    {
        $query = $this->createQueryBuilder('c')->getQuery();
        $pagination = $this->paginator->paginate($query, $page, $pageSize);
        $courses = $pagination->getItems();
        $currentPage = $pagination->getCurrentPageNumber();
        $totalPages = $pagination->getTotalItemCount() / $pagination->getItemNumberPerPage();

        return [
            'courses' => $courses,
            'currentPage' => $currentPage,
            'totalPages' => intval(ceil($totalPages)),
        ];
    }

    /**
     * @param int $page
     * @param int $pageSize
     * @param array $categories
     * @return array Returns an array of Course objects paginated
     */
    public function findPaginatedFilter(int $page, int $pageSize, array $categories): array{

        $query = $this->createQueryBuilder('c')
            ->where('c.category IN (:categories)')
            ->setParameter('categories', $categories)
            ->getQuery();
        $pagination = $this->paginator->paginate($query, $page, $pageSize);
        $courses = $pagination->getItems();
        $currentPage = $pagination->getCurrentPageNumber();
        $totalPages = $pagination->getTotalItemCount() / $pagination->getItemNumberPerPage();

        return [
            'courses' => $courses,
            'currentPage' => $currentPage,
            'totalPages' => intval(ceil($totalPages)),
        ];
    }

    /**
     * @param int $min
     * @param int $max
     * @param int $maxResults
     * @return CourseDTO[] Returns an array of Course objects
     */
    public function findByRegisteredUsers(int $min, int $max, int $maxResults): array
    {
        $courses = $this->createQueryBuilder('c')
            ->where('c.registeredUsers >= :min')
            ->andWhere('c.registeredUsers <= :max')
            ->setParameter('min', $min)
            ->setParameter('max', $max)
            ->setMaxResults($maxResults)
            ->getQuery()
            ->getResult();

        return $this->mapper->mapCourses($courses);
    }

    /**
     * @param int $page
     * @param int $pageSize
     * @param string $value
     * @return CourseDTO[] Returns an array of Course objects
     */
    public function findLikeName(int $page, int $pageSize, string $value): array
    {
        $query = $this->createQueryBuilder('c')
            ->where('c.name LIKE :val')
            ->setParameter('val', "%{$value}%")
            ->getQuery();

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

    /**
     * @return Course
     */
    public function findMostPopularCourse(): Course
    {
        return $this->createQueryBuilder('c')
            ->orderBy('c.registeredUsers', 'DESC')
            ->getQuery()
            ->setMaxResults(1)
            ->getOneOrNullResult()
            ;
    }

    /**
     * @param array $courseData
     * @return Course
     * @throws \Exception
     */
    public function createCourse(array $courseData): Course
    {
        $course = new Course($courseData["name"], $courseData["description"], $courseData["registered_users"], new \DateTime($courseData["publication_date"]), $courseData["image"], $courseData["category"]);
        $this->entityManager->persist($course);
        $this->entityManager->flush();

        return $course;
    }
}
