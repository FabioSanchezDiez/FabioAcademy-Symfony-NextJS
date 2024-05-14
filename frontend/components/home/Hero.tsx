import Image from "next/image";
import Button from "../ui/elements/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="container px-16 grid lg:grid-cols-2 max-lg:mt-8">
      <div className="flex flex-col justify-center items-start">
        <h1 className="text-3xl sm:text-5xl font-black text-darkenLightBlue leading-[115%] mb-8">
          Aprende programación
          <span className="text-black dark:text-white block">
            de forma gratuita
          </span>
        </h1>
        <p className="sm:text-xl leading-normal mb-8">
          En FabioCode Academy encontrarás una gran cantidad de cursos para que
          puedas aprender desarrollo de software de manera gratuita y con cursos
          de gran calidad.
        </p>
        <Link href={"/accounts/login"} className="w-full">
          <Button
            textContent="Únete a nuestra comunidad"
            bgColor="bg-darkenLightBlue"
            textColor="text-white"
          ></Button>
        </Link>
      </div>
      <div className="block mx-auto">
        <Image
          src={"/img/logo.png"}
          alt="logo"
          width={500}
          height={500}
        ></Image>
      </div>
    </section>
  );
}
