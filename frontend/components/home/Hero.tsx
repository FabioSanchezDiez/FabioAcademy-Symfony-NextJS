import Image from "next/image";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="container px-16 grid md:grid-cols-2 mt-8 lg:mt-2">
      <div className="flex flex-col justify-center items-start">
        <h1 className="lg:text-5xl text-4xl font-black text-darkenLightBlue leading-[115%] mb-8">
          Aprende programación
          <span className="text-black dark:text-white block">
            de forma gratuita
          </span>
        </h1>
        <p className="text-xl leading-normal mb-8 dark:text-slate-400">
          En FabioCode Academy encontrarás una gran cantidad de cursos para que
          puedas aprender desarrollo de software de manera gratuita y con cursos
          de gran calidad.
        </p>
        <Button
          textContent="Únete a nuestra comunidad"
          bgColor="bg-darkenLightBlue"
          textColor="text-white"
        ></Button>
      </div>
      <div className="grid place-items-center">
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
