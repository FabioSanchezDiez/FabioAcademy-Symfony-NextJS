<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<div align="center">
  <a href="https://github.com/FabioSanchezDiez/FabioAcademy-Symfony-NextJS">
    <img src="https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FFabioCodeAcademy_Logo.png?alt=media&token=58d006bc-459b-4fb1-b04c-053b739045f5" alt="Logo" width="150" height="170">
  </a>

<h3 align="center">FabioCode - Academy</h3>

  <p align="center">
    FabioCode Academy is my final project for the DAM degree at Atlántida Formación Profesional.
    <br />
    <a href="https://github.com/FabioSanchezDiez/FabioAcademy-Symfony-NextJS/blob/master/README.md"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/FabioSanchezDiez/FabioAcademy-Symfony-NextJS">View Demo</a>
    ·
    <a href="https://github.com/FabioSanchezDiez/FabioAcademy-Symfony-NextJS/issues/new">Report Bug</a>
    ·
    <a href="https://github.com/FabioSanchezDiez/FabioAcademy-Symfony-NextJS/issues/new">Request Feature</a>
  </p>
</div>

## About The Project

FabioCode Academy is an academy of programming courses with a robust API built with Symfony and a frontend developed using Next.js. Each component operates as an independent black box, ensuring seamless integration and modularity. It is my first project with these technologies.

### Built With

- [![PHP][PHP]][PHP-url]
- [![Symfony][Symfony.com]][Symfony-url]
- [![MySQL][MySQL]][MySQL-url]
- [![Typescript][Typescript]][Typescript-url]
- [![Next][Next.js]][Next-url]
- [![React][React.js]][React-url]
- [![Tailwind][Tailwind.com]][Tailwind-url]

### Home Page

[![Mockup FabioCode - Academy][mockup-url]](https://github.com/FabioSanchezDiez/FabioAcademy-Symfony-NextJS)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

The entire project works inside Docker containers so you have to install Docker and Docker Compose 🐳 on your device.
It also has a Makefile to automatize the execution and the building of the project.

(Note: everything was built using Ubuntu OS, this means that it might not work properly on a Windows OS)

[![Ubuntu][Ubuntu]][Ubuntu-url]

### Installation

1. Clone the repository:

   ```sh
   git clone git@github.com:FabioSanchezDiez/FabioAcademy-Symfony-NextJS.git
   ```

2. Initialize all the docker containers and install the dependencies:

   ```sh
   make init
   ```

3. Create the database and load the fixtures:

   ```sh
   make db
   ```

Now you should be able to access http://localhost:3000/

### For future initilizations

Once you already set up the project for the next time that you want to run it execute that:

1. Run all the containers:

   ```sh
   make up
   ```

   <p align="right">(<a href="#readme-top">back to top</a>)</p>

## Features

Below are the main features of FabioCode Academy:

- Account creation and login with JWT
- Role system (User, Teacher, Admin)
- Email sending for account confirmation
- Course viewing service by enrollment
- Course search
- Create, update, and delete courses (teachers and admins only)
- Dark and light mode based on user preferences
- Responsive design
- XDebug integration (only for development)

### Entity-Relationship Diagram

[![Mockup FabioCode - Academy][diagram-url]](https://github.com/FabioSanchezDiez/FabioAcademy-Symfony-NextJS)

   <p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgements

I would like to thank all the teachers I have had, and especially **[Aircury](https://www.aircury.es/)**, the company where I completed my internship, it has been a truly enriching experience.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Typescript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[PHP]: https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white
[PHP-url]: https://www.php.net/
[Symfony.com]: https://img.shields.io/badge/symfony-%23000000.svg?style=for-the-badge&logo=symfony&logoColor=white
[Symfony-url]: https://symfony.com/
[MySQL]: https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white
[MySQL-url]: https://www.mysql.com/
[Tailwind.com]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[Ubuntu]: https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white
[Ubuntu-url]: https://ubuntu.com/download
[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[mockup-url]: https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FFabioCodeMockup.png?alt=media&token=e6f6b821-6126-4740-8e61-968c1e132b8c
[diagram-url]: https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FFabioCodeDiagram.png?alt=media&token=d6152ae9-b0fc-4738-84b1-828e074eb308
[linkedin-url]: https://linkedin.com/in/othneildrew
[built-with-love]: http://ForTheBadge.com/images/badges/built-with-love.svg
