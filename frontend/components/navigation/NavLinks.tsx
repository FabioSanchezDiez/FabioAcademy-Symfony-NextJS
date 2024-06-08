"use client";

import { checkSessionStatus } from "@/src/lib/data";
import {
  COURSES_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  LEARNING_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  REGISTER_PAGE_ROUTE,
  TEACHERS_PAGE_ROUTE,
} from "@/src/lib/routes";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function NavLinks() {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const checkSessionIntervalMS = 300000;

  const currentRouteStyles = (route: string) => {
    return `dark:hover:text-slate-200 hover:text-gray-600 ${
      route === pathname
        ? "text-gray-600 dark:text-slate-200"
        : "dark:text-slate-400"
    }`;
  };

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
      <Link href={HOME_PAGE_ROUTE}>
        <p className={currentRouteStyles(HOME_PAGE_ROUTE)}>Inicio</p>
      </Link>
      <Link href={COURSES_PAGE_ROUTE}>
        <p className={currentRouteStyles(COURSES_PAGE_ROUTE)}>Cursos</p>
      </Link>
      {status === "loading" ? (
        <p className="dark:text-slate-400 inline-block min-w-fit whitespace-nowrap dark:hover:text-slate-200 hover:text-gray-700">
          Cargando...
        </p>
      ) : session?.user ? (
        <>
          <Link href={LEARNING_PAGE_ROUTE}>
            <p className={currentRouteStyles(LEARNING_PAGE_ROUTE)}>
              Mis Cursos
            </p>
          </Link>
          {session.user.isTeacher && (
            <Link href={TEACHERS_PAGE_ROUTE}>
              <p className={currentRouteStyles(TEACHERS_PAGE_ROUTE)}>
                Gestionar Cursos
              </p>
            </Link>
          )}
          <button onClick={() => signOut()}>
            <p className="dark:text-slate-400 inline-block min-w-fit whitespace-nowrap dark:hover:text-slate-200 hover:text-gray-700">
              Cerrar Sesión
            </p>
          </button>
        </>
      ) : (
        <>
          <Link href={LOGIN_PAGE_ROUTE}>
            <p className={currentRouteStyles(LOGIN_PAGE_ROUTE)}>
              Iniciar Sesión
            </p>
          </Link>
          <Link href={REGISTER_PAGE_ROUTE}>
            <p className={currentRouteStyles(REGISTER_PAGE_ROUTE)}>
              Registrarse
            </p>
          </Link>
        </>
      )}
    </>
  );
}
