<?php

namespace App\Repository;

use App\DTO\CourseDTO;
use App\Entity\Course;
use App\Service\AutoMapperService;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Knp\Component\Pager\Pagination\PaginationInterface;
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
    public function __construct(ManagerRegistry $registry, private PaginatorInterface $paginator, private AutoMapperService $mapper)
    {
        parent::__construct($registry, Course::class);
    }

    /**
     * @param int $page
     * @param int $pageSize
     * @return PaginationInterface Returns an array of Course objects paginated
     */
    public function findAllPaginated(int $page, int $pageSize): PaginationInterface
    {
        $query = $this->createQueryBuilder('c')->getQuery();
        return $this->paginator->paginate($query, $page, $pageSize);
    }

    /**
     * @return CourseDTO[] Returns an array of Course objects
     */
    public function findByRegisteredUsers(int $value): array
    {
        $courses = $this->createQueryBuilder('c')
            ->where('c.registeredUsers >= :val')
            ->setParameter('val', $value)
            ->setMaxResults(6)
            ->getQuery()
            ->getResult();

        return $this->mapper->mapCourses($courses);
    }

    /**
     * @return CourseDTO[] Returns an array of Course objects
     */
    public function findLikeName(string $value): array
    {
        $courses = $this->createQueryBuilder('c')
            ->where('c.name LIKE :val')
            ->setParameter('val', "%{$value}%")
            ->getQuery()
            ->getResult();

        return $this->mapper->mapCourses($courses);
    }

//    public function findOneBySomeField($value): ?Course
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
