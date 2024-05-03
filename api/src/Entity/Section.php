<?php

namespace App\Entity;

use App\Repository\SectionRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Ignore;

#[ORM\Entity(repositoryClass: SectionRepository::class)]
class Section
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $title = null;

    #[ORM\Column]
    private ?int $sectionOrder = null;

    #[ORM\ManyToOne(inversedBy: 'sections')]
    #[ORM\JoinColumn(name: "course_id", referencedColumnName: "id", onDelete: "CASCADE")]
    #[Ignore]
    private ?Course $course = null;

    /**
     * @param string|null $title
     * @param int|null $sectionOrder
     * @param Course|null $course
     */
    public function __construct(?string $title, ?int $sectionOrder, ?Course $course)
    {
        $this->title = $title;
        $this->sectionOrder = $sectionOrder;
        $this->course = $course;
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

    public function getSectionOrder(): ?int
    {
        return $this->sectionOrder;
    }

    public function setSectionOrder(int $sectionOrder): static
    {
        $this->sectionOrder = $sectionOrder;

        return $this;
    }

    public function getCourse(): ?Course
    {
        return $this->course;
    }

    public function setCourse(?Course $course): static
    {
        $this->course = $course;

        return $this;
    }
}
