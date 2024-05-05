import Image from "next/image"
export default function NavBar() {
  return (
    <nav className="flex items-center justify-center gap-4">
        <Image src="/img/textlogo.png" alt="logo" width={200} height={60} />
    </nav>
  )
}
