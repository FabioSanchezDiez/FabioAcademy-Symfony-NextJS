import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/src/fonts";

export const metadata: Metadata = {
  title: "FabioCode - Academy",
  description: "Academia de cursos de programación gratuitos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
