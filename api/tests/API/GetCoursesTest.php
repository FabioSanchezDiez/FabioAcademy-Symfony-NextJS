<?php

namespace App\Tests\API;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class GetCoursesTest extends WebTestCase
{
    private $client;
    protected function setUp(): void
    {
        $this->client = static::createClient();
    }


    public function testItWorks()
    {
        $this->client->request("GET", "/");
        $this->assertEquals(200, $this->client->getResponse()->getStatusCode());
    }

    public function getFirstTenCoursesPaginated()
    {
           $expected = "";
    }
}