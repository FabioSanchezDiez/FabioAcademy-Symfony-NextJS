"use client";

import { checkSessionStatus } from "@/src/lib/data";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";

export default function NavLinks() {
  const { data: session } = useSession();
  const checkSessionIntervalMS = 300000;

  useEffect(() => {
    if (session?.user) {
      const interval = setInterval(() => {
        checkSessionStatus(session?.user.token).catch(() => {
          signOut();
        });
      }, checkSessionIntervalMS);
      return () => clearInterval(interval);
    }
  });

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
            <p className="dark:text-slate-400 inline-block min-w-fit whitespace-nowrap">
              Cerrar Sesión
            </p>
          </button>
        </>
      ) : (
        <>
          <Link href={"/accounts/login"}>
            <p className="dark:text-slate-400 inline-block min-w-fit whitespace-nowrap">
              Iniciar Sesión
            </p>
          </Link>
          <Link href={"/accounts/register"}>
            <p className="dark:text-slate-400">Registrarse</p>
          </Link>
        </>
      )}
    </>
  );
}
