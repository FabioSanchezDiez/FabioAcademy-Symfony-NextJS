import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/src/fonts";
import NavBar from "@/components/navigation/NavBar";

export const metadata: Metadata = {
  title: "FabioCode - Academy",
  description: "Academia de cursos de programación gratuitos",
  icons: {
    icon: "/img/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} antialiased bg-gray-200 dark:bg-slate-900`}
      >
        <header>
          <NavBar></NavBar>
        </header>
        {children}
      </body>
    </html>
  );
}
