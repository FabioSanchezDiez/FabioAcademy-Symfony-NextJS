import Link from "next/link";

const links = [
  { name: "Inicio", href: "/" },
  { name: "Cursos", href: "/courses" },
  { name: "Entrar", href: "/login" },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <Link key={link.name} href={link.href}>
            <p className="dark:text-slate-400">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
