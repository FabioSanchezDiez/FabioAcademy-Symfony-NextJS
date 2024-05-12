"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const links = [
  { name: "Inicio", href: "/" },
  { name: "Cursos", href: "/courses" },
  { name: "Entrar", href: "/login" },
];

export default function NavLinks() {
  const { data: session } = useSession();

  return (
    <>
      <Link href={"/"}>
        <p className="dark:text-slate-400">Inicio</p>
      </Link>
      <Link href={"/courses"}>
        <p className="dark:text-slate-400">Cursos</p>
      </Link>
      {session?.user ? (
        <>
          <Link href={"/dashboard"}>
            <p className="dark:text-slate-400">Dashboard</p>
          </Link>
          <button onClick={() => signOut()}>
            <p className="dark:text-slate-400">Cerrar Sesión</p>
          </button>
        </>
      ) : (
        <>
          <Link href={"/login"}>
            <p className="dark:text-slate-400">Iniciar Sesión</p>
          </Link>
          <Link href={"/register"}>
            <p className="dark:text-slate-400">Registrarse</p>
          </Link>
        </>
      )}
    </>
  );
}
