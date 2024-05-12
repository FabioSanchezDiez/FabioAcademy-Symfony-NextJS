import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/src/fonts";
import NavBar from "@/components/navigation/NavBar";
import { SessionAuthProvider, ThemeAppProvider } from "./providers";
import Footer from "@/components/ui/Footer";

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
    <html lang="es" suppressHydrationWarning={true}>
      <body
        className={`${inter.className} antialiased bg-gray-200 dark:bg-slate-900 min-h-screen`}
      >
        <ThemeAppProvider>
          <SessionAuthProvider>
            <NavBar></NavBar>
            {children}
            <Footer></Footer>
          </SessionAuthProvider>
        </ThemeAppProvider>
      </body>
    </html>
  );
}
