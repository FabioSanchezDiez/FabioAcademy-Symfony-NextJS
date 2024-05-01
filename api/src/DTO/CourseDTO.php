<?php

namespace App\DTO;

class CourseDTO
{
    public function __construct(private int $id, private string $name, private string $image, private int $registeredUsers){}

    public function getId(): int
    {
        return $this->id;
    }

    public function setId(int $id): void
    {
        $this->id = $id;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): void
    {
        $this->name = $name;
    }

    public function getImage(): string
    {
        return $this->image;
    }

    public function setImage(string $image): void
    {
        $this->image = $image;
    }

    public function getRegisteredUsers(): int
    {
        return $this->registeredUsers;
    }

    public function setRegisteredUsers(int $registeredUsers): void
    {
        $this->registeredUsers = $registeredUsers;
    }


}