<?php

namespace App\Repository;

use App\Entity\Course;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<User>
 */
class UserRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry, private EntityManagerInterface $entityManager)
    {
        parent::__construct($registry, User::class);
    }

    /**
     * @param User $user
     * @return void
     */
    public function createOrUpdateUser(User $user): bool
    {
        $this->entityManager->persist($user);
        $this->entityManager->flush();
        return true;
    }

    /**
     * @param string $email
     * @param int $courseId
     * @return bool
     */
    public function isUserEnrolledInCourseById(string $email, int $courseId): bool
    {
        $qb = $this->createQueryBuilder('u')
            ->innerJoin('u.courses', 'c')
            ->where('u.email = :email')
            ->andWhere('c.id = :courseId')
            ->setParameter('email', $email)
            ->setParameter('courseId', $courseId)
            ->getQuery();

        $result = $qb->getOneOrNullResult();

        return $result !== null;
    }



    //    /**
    //     * @return User[] Returns an array of User objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('u')
    //            ->andWhere('u.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('u.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?User
    //    {
    //        return $this->createQueryBuilder('u')
    //            ->andWhere('u.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
