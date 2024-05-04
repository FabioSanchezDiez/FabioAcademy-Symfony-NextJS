<?php

namespace App\Entity;

use App\Repository\LessonRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Attribute\Ignore;

#[ORM\Entity(repositoryClass: LessonRepository::class)]
class Lesson
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $title = null;

    #[ORM\Column]
    private ?int $lessonOrder = null;

    #[ORM\Column(length: 255)]
    private ?string $video = null;

    #[ORM\ManyToOne(inversedBy: 'lessons')]
    #[ORM\JoinColumn(nullable: false)]
    #[Ignore]
    private ?Section $section = null;

    /**
     * @param string|null $title
     * @param int|null $lessonOrder
     * @param string|null $video
     * @param Section|null $section
     */
    public function __construct(?string $title, ?int $lessonOrder, ?string $video, ?Section $section)
    {
        $this->title = $title;
        $this->lessonOrder = $lessonOrder;
        $this->video = $video;
        $this->section = $section;
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): static
    {
        $this->title = $title;

        return $this;
    }

    public function getLessonOrder(): ?int
    {
        return $this->lessonOrder;
    }

    public function setLessonOrder(int $lessonOrder): static
    {
        $this->lessonOrder = $lessonOrder;

        return $this;
    }

    public function getVideo(): ?string
    {
        return $this->video;
    }

    public function setVideo(string $video): static
    {
        $this->video = $video;

        return $this;
    }

    public function getSection(): ?Section
    {
        return $this->section;
    }

    public function setSection(?Section $section): static
    {
        $this->section = $section;

        return $this;
    }
}
