import Image from "next/image";
import NavLinks from "./NavLinks";
import Link from "next/link";
import SearchBar from "./SearchBar";
import ThemeSwitch from "../ThemeSwitch";
export default function NavBar() {
  return (
    <nav className="flex items-center justify-center flex-col md:flex-row md:gap-8 lg:gap-12 gap-4 p-6 shadow-xl bg-gray-100 dark:bg-slate-800">
      <Link href={"/"}>
        <Image
          src="/img/textlogo.png"
          alt="logo"
          width={200}
          height={60}
          priority={true}
        />
      </Link>
      <NavLinks />
      <SearchBar />
      <ThemeSwitch></ThemeSwitch>
    </nav>
  );
}
