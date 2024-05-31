<?php

namespace App\DataFixtures;

use App\Entity\Course;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class CourseFixtures extends Fixture implements DependentFixtureInterface
{
    private array $coursesData;
    public function load(ObjectManager $manager): void
    {
        $this->initializeCoursesData();

        foreach ($this->coursesData as $courseInfo) {
            $user = $manager->getReference(User::class, $courseInfo['owner_id']);
            $course = new Course($courseInfo['name'], $courseInfo['description'], $courseInfo['registered_users'], $courseInfo['publication_date'], $courseInfo['image'], $courseInfo['category'], $user);
            $manager->persist($course);
        }

        $manager->flush();
    }

    private function initializeCoursesData(): void{
        $this->coursesData = [
            [
                'name' => 'Programación en Python - Desde Principiante hasta Experto',
                'description' => 'Curso completo que abarca todos los aspectos de la programación en Python. Desde los conceptos más básicos hasta las técnicas avanzadas y aplicaciones prácticas en el mundo real. Aprenderás a desarrollar proyectos Python desde cero y a convertirte en un experto en el lenguaje.',
                'registered_users' => 24000,
                'publication_date' => new \DateTime('2024-01-13'),
                'image' => 'https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FPyhton%20Curso.png?alt=media&token=2128f45d-22d9-45da-8db8-9f01e850e08c',
                'category' => 'Programación',
                'owner_id' => 1,
            ],
            [
                'name' => 'Desarrollo Web con JavaScript - Construye tu Sitio desde Cero',
                'description' => 'Este curso integral te guiará a través del emocionante mundo del desarrollo web con JavaScript. Aprenderás a construir sitios web dinámicos y modernos desde cero. Desde la manipulación del DOM hasta el desarrollo de aplicaciones web interactivas, este curso te proporcionará las habilidades esenciales para destacar en el desarrollo web.',
                'registered_users' => 22500,
                'publication_date' => new \DateTime('2024-01-14'),
                'image' => 'https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FJavaScript%20Curso.png?alt=media&token=21e81e2f-b36f-498c-bdb8-4193b49b12f8',
                'category' => 'Programación',
                'owner_id' => 1,
            ],
            [
                'name' => 'Dominando Java - Curso Completo Desde 0 para Estudiantes',
                'description' => 'Sumérgete en el universo de Java con este curso completo. Desde los fundamentos hasta las características avanzadas, aprenderás a desarrollar aplicaciones robustas y escalables utilizando Java. Cubriremos temas como programación orientada a objetos, colecciones, excepciones y patrones de diseño. ¡Prepárate para convertirte en un desarrollador Java experto!',
                'registered_users' => 23000,
                'publication_date' => new \DateTime('2024-01-15'),
                'image' => 'https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FJava%20Curso.png?alt=media&token=ebf6d868-f1c8-49c5-9fce-7e8edf964ffd',
                'category' => 'Programación',
                'owner_id' => 1,
            ],
            [
                'name' => 'C# en Acción - Aprende Programación Orientada a Objetos',
                'description' => 'Descubre el fascinante mundo de C# con este curso dinámico. Desde los conceptos básicos hasta las complejidades de la programación orientada a objetos, dominarás el lenguaje C# mientras construyes aplicaciones prácticas. Obtén las habilidades esenciales para desarrollar software robusto y eficiente en C#.',
                'registered_users' => 16000,
                'publication_date' => new \DateTime('2024-01-16'),
                'image' => 'https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FC%23%20Curso.png?alt=media&token=03b112f5-5284-4d86-8481-d3699effb83c',
                'category' => 'Programación',
                'owner_id' => 1,
            ],
            [
                'name' => 'Ruby para Todos - Desde Novato hasta Rubyista',
                'description' => 'Conviértete en un maestro de Ruby con este curso comprehensivo. Desde los conceptos básicos de sintaxis hasta las técnicas avanzadas de desarrollo, este curso te llevará desde ser un novato hasta convertirte en un Rubyista experto. Explora la elegancia y la versatilidad de Ruby mientras construyes proyectos emocionantes.',
                'registered_users' => 1200,
                'publication_date' => new \DateTime('2024-01-17'),
                'image' => 'https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FRuby%20Curso.png?alt=media&token=2ef014b8-ac00-4515-bf26-d5b6d1687942',
                'category' => 'Programación',
                'owner_id' => 1,
            ],
            [
                'name' => 'Desarrollo iOS con Swift - Construye Apps para iPhone',
                'description' => 'Entra en el emocionante mundo del desarrollo de iOS con Swift. Aprenderás a construir aplicaciones nativas para iPhone desde cero. Desde la interfaz de usuario hasta la integración de API, este curso te proporcionará las habilidades esenciales para crear aplicaciones iOS atractivas y funcionales.',
                'registered_users' => 2450,
                'publication_date' => new \DateTime('2024-01-18'),
                'image' => 'https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FSwift%20Curso.png?alt=media&token=873c8b3c-2fa9-4e9c-9221-82e5060f65ac',
                'category' => 'Mobile',
                'owner_id' => 1,
            ],
            [
                'name' => 'Kotlin: Desde el Principio a Desarrollador Android Profesional',
                'description' => 'Descubre Kotlin, el lenguaje de programación moderno para el desarrollo Android. Desde los fundamentos hasta las características avanzadas, este curso te preparará para crear aplicaciones Android de alta calidad utilizando Kotlin. Aprenderás las mejores prácticas y técnicas de desarrollo modernas.',
                'registered_users' => 22700,
                'publication_date' => new \DateTime('2024-01-19'),
                'image' => 'https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FKotlin%20Curso.png?alt=media&token=3ca7d2c4-2cf7-41ed-97d1-fed3f50305d9',
                'category' => 'Mobile',
                'owner_id' => 1,
            ],
            [
                'name' => 'HTML y CSS - Diseño Web Moderno desde Cero',
                'description' => 'Sumérgete en el diseño web moderno con HTML y CSS. Este curso te guiará desde los conceptos básicos hasta las técnicas avanzadas de diseño. Aprenderás a construir sitios web responsivos y atractivos mientras dominas las últimas tendencias en diseño web.',
                'registered_users' => 9460,
                'publication_date' => new \DateTime('2024-01-20'),
                'image' => 'https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FHTML%20y%20CSS%20Curso.png?alt=media&token=db4aa7fa-de7f-45fb-ac70-9a377e58fb84',
                'category' => 'Desarrollo Web',
                'owner_id' => 1,
            ],
            [
                'name' => 'ReactJS Avanzado - Construyendo Interfaces Interactivas',
                'description' => 'Conviértete en un experto en ReactJS con este curso avanzado. Aprenderás a construir interfaces de usuario interactivas y dinámicas utilizando ReactJS. Explora conceptos avanzados como el manejo de estados, el enrutamiento y la gestión de formularios para crear aplicaciones web modernas.',
                'registered_users' => 64300,
                'publication_date' => new \DateTime('2024-01-21'),
                'image' => 'https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FReact%20Curso.png?alt=media&token=7fcb9fe2-0465-4a05-ab44-2612607742fb',
                'category' => 'Desarrollo Web',
                'owner_id' => 1,
            ],
            [
                'name' => 'Angular: Desarrollo de Aplicaciones Web Potentes',
                'description' => 'Explora el poder de Angular en este curso completo. Desde la configuración inicial hasta la creación de aplicaciones web potentes, obtendrás las habilidades necesarias para ser un desarrollador Angular eficiente. Aprenderás sobre componentes, servicios, rutas y más.',
                'registered_users' => 6730,
                'publication_date' => new \DateTime('2024-01-22'),
                'image' => 'https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FAngular%20Curso.png?alt=media&token=c79d35d3-0009-4cac-b726-e78b217cd87f',
                'category' => 'Desarrollo Web',
                'owner_id' => 1,
            ],
            [
                'name' => 'Vue.js desde Cero - Construye Aplicaciones Modernas',
                'description' => 'Descubre la simplicidad y la elegancia de Vue.js. Este curso te llevará desde los fundamentos hasta la creación de aplicaciones web modernas utilizando Vue.js. Aprenderás sobre componentes, directivas y el sistema de estado para construir aplicaciones escalables y eficientes.',
                'registered_users' => 35,
                'publication_date' => new \DateTime('2024-01-23'),
                'image' => 'https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FCurso%20Generico.png?alt=media&token=10ce507b-536c-49ff-b92d-545544f0bf2a',
                'category' => 'Desarrollo Web',
                'owner_id' => 1,
            ],
            [
                'name' => 'Node.js: Construyendo Aplicaciones Escalables',
                'description' => 'Domina el desarrollo de aplicaciones escalables con Node.js. Aprenderás a construir servidores eficientes y a trabajar con el ecosistema de Node.js. Desde la gestión de paquetes hasta la creación de API RESTful, este curso te preparará para ser un desarrollador Node.js competente.',
                'registered_users' => 30,
                'publication_date' => new \DateTime('2024-01-24'),
                'image' => 'https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FCurso%20Generico.png?alt=media&token=10ce507b-536c-49ff-b92d-545544f0bf2a',
                'category' => 'Desarrollo Web',
                'owner_id' => 1,
            ],
            [
                'name' => 'Django en Profundidad - Desarrollo Rápido de Aplicaciones Web',
                'description' => 'Explora las profundidades del desarrollo web con Django. Desde la configuración inicial hasta la creación de aplicaciones complejas, este curso te enseñará a desarrollar rápidamente aplicaciones web utilizando el framework Django de Python. Aprenderás sobre modelos, vistas, plantillas y más.',
                'registered_users' => 25,
                'publication_date' => new \DateTime('2024-01-25'),
                'image' => 'https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FCurso%20Generico.png?alt=media&token=10ce507b-536c-49ff-b92d-545544f0bf2a',
                'category' => 'Desarrollo Web',
                'owner_id' => 1,
            ],
            [
                'name' => 'Laravel Framework: Desarrollo de Aplicaciones Web con PHP Modernas',
                'description' => 'Descubre el framework PHP moderno con Laravel. Este curso te guiará desde los conceptos básicos hasta la creación de aplicaciones PHP modernas y eficientes. Aprenderás sobre migraciones, Eloquent ORM, rutas y controladores.',
                'registered_users' => 17800,
                'publication_date' => new \DateTime('2024-01-26'),
                'image' => 'https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FLaravel%20Curso.png?alt=media&token=5b7e1bff-440c-4009-afaa-a90c7eed4425',
                'category' => 'Desarrollo Web',
                'owner_id' => 1,
            ],
            [
                'name' => 'MongoDB: Diseño de Bases de Datos NoSQL',
                'description' => 'Adéntrate en el mundo de las bases de datos NoSQL con MongoDB. Aprenderás a diseñar y gestionar bases de datos NoSQL eficientes utilizando MongoDB. Explora la flexibilidad y escalabilidad de MongoDB mientras desarrollas habilidades prácticas de diseño de bases de datos.',
                'registered_users' => 40,
                'publication_date' => new \DateTime('2024-01-27'),
                'image' => 'https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FCurso%20Generico.png?alt=media&token=10ce507b-536c-49ff-b92d-545544f0bf2a',
                'category' => 'Bases de Datos',
                'owner_id' => 1,
            ],
            [
                'name' => 'MySQL desde Cero - Fundamentos de Bases de Datos Relacionales',
                'description' => 'Inicia tu viaje en bases de datos relacionales con MySQL. Este curso te llevará desde la instalación hasta la creación y gestión de bases de datos relacionales eficientes con MySQL. Aprenderás sobre consultas SQL, relaciones y optimización de bases de datos.',
                'registered_users' => 35,
                'publication_date' => new \DateTime('2024-01-28'),
                'image' => 'https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FCurso%20Generico.png?alt=media&token=10ce507b-536c-49ff-b92d-545544f0bf2a',
                'category' => 'Bases de Datos',
                'owner_id' => 1,
            ],
            [
                'name' => 'PostgreSQL: Administración y Desarrollo Avanzado',
                'description' => 'Domina la administración y el desarrollo avanzado con PostgreSQL. Desde la instalación hasta la optimización de consultas, aprenderás a trabajar eficientemente con PostgreSQL. Explora características avanzadas como las funciones almacenadas, los disparadores y la replicación.',
                'registered_users' => 30,
                'publication_date' => new \DateTime('2024-01-29'),
                'image' => 'https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FCurso%20Generico.png?alt=media&token=10ce507b-536c-49ff-b92d-545544f0bf2a',
                'category' => 'Bases de Datos',
                'owner_id' => 1,
            ],
            [
                'name' => 'Firebase en Acción - Desarrollo de Aplicaciones en la Nube',
                'description' => 'Descubre el potencial de desarrollo en la nube con Firebase. Este curso te enseñará a construir aplicaciones escalables y en tiempo real utilizando Firebase. Aprenderás sobre autenticación, almacenamiento en la nube, y la integración de Firebase en aplicaciones web y móviles.',
                'registered_users' => 25,
                'publication_date' => new \DateTime('2024-01-30'),
                'image' => 'https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FCurso%20Generico.png?alt=media&token=10ce507b-536c-49ff-b92d-545544f0bf2a',
                'category' => 'Bases de Datos',
                'owner_id' => 1,
            ],
            [
                'name' => 'Docker: Despliegue y Contenerización de Aplicaciones',
                'description' => 'Aprende la revolucionaria tecnología de contenerización con Docker. Este curso te guiará desde la instalación hasta el despliegue de aplicaciones utilizando contenedores Docker. Aprenderás sobre imágenes, contenedores, redes y orquestación con Docker Compose.',
                'registered_users' => 1150,
                'publication_date' => new \DateTime('2024-01-31'),
                'image' => 'https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FCurso%20Generico.png?alt=media&token=10ce507b-536c-49ff-b92d-545544f0bf2a',
                'category' => 'DevOps',
                'owner_id' => 1,
            ],
            [
                'name' => 'CI/CD con Jenkins - Automatización de Despliegues',
                'description' => 'Automatiza tus despliegues con Jenkins y adopta una estrategia CI/CD efectiva. Aprenderás a configurar pipelines de integración y despliegue continuo utilizando Jenkins. Desde la instalación hasta la implementación de pipelines complejos, este curso te preparará para automatizar tus procesos de desarrollo.',
                'registered_users' => 800,
                'publication_date' => new \DateTime('2024-02-01'),
                'image' => 'https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FCurso%20Generico.png?alt=media&token=10ce507b-536c-49ff-b92d-545544f0bf2a',
                'category' => 'DevOps',
                'owner_id' => 1,
            ],
            [
                'name' => 'Git y GitHub: Control de Versiones para Desarrolladores',
                'description' => 'Domina el control de versiones con Git y GitHub. Este curso te llevará desde los conceptos básicos hasta las prácticas avanzadas de Git. Aprenderás a trabajar con ramas, colaborar en repositorios remotos y adoptar un flujo de trabajo eficiente con Git.',
                'registered_users' => 14000,
                'publication_date' => new \DateTime('2024-02-02'),
                'image' => 'https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FCurso%20Generico.png?alt=media&token=10ce507b-536c-49ff-b92d-545544f0bf2a',
                'category' => 'DevOps',
                'owner_id' => 1,
            ],
            [
                'name' => 'Fundamentos de Linux - Dominando la Terminal',
                'description' => 'Aprende los fundamentos esenciales de Linux y domina la línea de comandos. Este curso te guiará a través de las características básicas de Linux, desde la navegación en el sistema de archivos hasta la gestión de usuarios y permisos. Desarrolla habilidades prácticas en la terminal de Linux.',
                'registered_users' => 6000,
                'publication_date' => new \DateTime('2024-02-03'),
                'image' => 'https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FCurso%20Generico.png?alt=media&token=10ce507b-536c-49ff-b92d-545544f0bf2a',
                'category' => 'DevOps',
                'owner_id' => 1,
            ],
            [
                'name' => 'Introducción a la Seguridad Informática',
                'description' => 'Descubre los principios básicos de la seguridad informática en este curso introductorio. Aprenderás sobre criptografía, protección de datos, amenazas comunes y mejores prácticas de seguridad. Desarrolla una comprensión fundamental de la seguridad en el mundo digital.',
                'registered_users' => 22000,
                'publication_date' => new \DateTime('2024-02-04'),
                'image' => 'https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FCurso%20Generico.png?alt=media&token=10ce507b-536c-49ff-b92d-545544f0bf2a',
                'category' => 'Seguridad Informática',
                'owner_id' => 1,
            ],
            [
                'name' => 'Python para Ciencia de Datos - Análisis y Visualización',
                'description' => 'Aprende a utilizar Python para el análisis de datos y la visualización en este curso especializado. Descubre bibliotecas como Pandas, NumPy y Matplotlib para realizar análisis estadísticos y crear visualizaciones impactantes. Este curso es ideal para quienes buscan incursionar en la ciencia de datos con Python.',
                'registered_users' => 11000,
                'publication_date' => new \DateTime('2024-02-05'),
                'image' => 'https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FCurso%20Generico.png?alt=media&token=10ce507b-536c-49ff-b92d-545544f0bf2a',
                'category' => 'Ciencia de Datos',
                'owner_id' => 1,
            ],
        ];
    }

    public function getDependencies()
    {
        return [UserFixtures::class];
    }
}
