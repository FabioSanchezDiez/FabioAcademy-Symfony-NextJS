<?php

namespace App\DataFixtures;

use App\Entity\Course;
use App\Entity\Review;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class ReviewFixtures extends Fixture implements DependentFixtureInterface
{
    private array $reviewsData;


    public function load(ObjectManager $manager): void
    {
        $this->initializeReviewsData();

        foreach ($this->reviewsData as $reviewInfo) {
            $course = $manager->getReference(Course::class, $reviewInfo['course_id']);
            $user = $manager->getReference(User::class, $reviewInfo['user_id']);
            $review = new Review($reviewInfo['review'], $reviewInfo['rating'], $user, $course);
            $manager->persist($review);
        }

        $manager->flush();
    }

    private function initializeReviewsData(): void
    {
        $this->reviewsData = [
            [
                'review' => 'Gran curso, muy informativo. Si eres principiante está 100% recomendado sin duda.',
                'rating' => 5,
                'user_id' => 1,
                'course_id' => 1
            ],
            [
                'review' => 'Excelente contenido y bien explicado, el instructor tiene un buen dominio del tema.',
                'rating' => 5,
                'user_id' => 1,
                'course_id' => 5
            ],
            [
                'review' => 'Altamente recomendado, me encantó. Las clases están grabadas a alta calidad.',
                'rating' => 5,
                'user_id' => 1,
                'course_id' => 15
            ],
            [
                'review' => 'Podría ser mejor, pero aún así bueno.',
                'rating' => 3,
                'user_id' => 2,
                'course_id' => 2
            ],
            [
                'review' => 'No me impresionó, necesita mejorar.',
                'rating' => 2,
                'user_id' => 2,
                'course_id' => 10
            ],
            [
                'review' => 'Curso promedio, cumplió mis expectativas.',
                'rating' => 3,
                'user_id' => 1,
                'course_id' => 2
            ],
            [
                'review' => 'Decepcionante, no vale la pena el tiempo.',
                'rating' => 1,
                'user_id' => 1,
                'course_id' => 10
            ],
            [
                'review' => 'Informativo y atractivo, 5 estrellas! Seguiré viendo cursos del mismo instructor',
                'rating' => 5,
                'user_id' => 2,
                'course_id' => 1
            ],
            [
                'review' => 'Bueno para principiantes, aprendí mucho. Te enseñan desde lo más básico del tema.',
                'rating' => 5,
                'user_id' => 2,
                'course_id' => 5
            ],
            [
                'review' => 'Contenido increíble, imprescindible sobretodo si eres alguien ya experimentado.',
                'rating' => 5,
                'user_id' => 2,
                'course_id' => 15
            ]
        ];

    }

    public function getDependencies()
    {
        return [UserFixtures::class, CourseFixtures::class];
    }
}
