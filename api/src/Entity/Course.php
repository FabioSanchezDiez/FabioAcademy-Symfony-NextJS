<?php

namespace App\Entity;

use App\Repository\CourseRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CourseRepository::class)]
class Course
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 655)]
    private ?string $description = null;

    #[ORM\Column]
    private ?int $registeredUsers = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $publicationDate = null;

    #[ORM\Column(length: 255)]
    private ?string $image = null;

    #[ORM\Column(length: 255)]
    private ?string $category = null;

    /**
     * @param string|null $name
     * @param string|null $description
     * @param int|null $registeredUsers
     * @param \DateTimeInterface|null $publicationDate
     * @param string|null $image
     * @param string|null $category
     */
    public function __construct(?string $name, ?string $description, ?int $registeredUsers, ?\DateTimeInterface $publicationDate, ?string $image, ?string $category)
    {
        $this->name = $name;
        $this->description = $description;
        $this->registeredUsers = $registeredUsers;
        $this->publicationDate = $publicationDate;
        $this->image = $image;
        $this->category = $category;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getRegisteredUsers(): ?int
    {
        return $this->registeredUsers;
    }

    public function setRegisteredUsers(?int $registeredUsers): static
    {
        $this->registeredUsers = $registeredUsers;

        return $this;
    }

    public function getPublicationDate(): ?\DateTimeInterface
    {
        return $this->publicationDate;
    }

    public function setPublicationDate(\DateTimeInterface $publicationDate): static
    {
        $this->publicationDate = $publicationDate;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): static
    {
        $this->image = $image;

        return $this;
    }

    public function getCategory(): ?string
    {
        return $this->category;
    }

    public function setCategory(string $category): static
    {
        $this->category = $category;

        return $this;
    }
}
