import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/navbar";
import "./divLayout.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carrera por la Vida",
  description: "Pagina web de La Carrera por la vida",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
          <div className="fullContainer">
              <Navbar/>
              {children}
          </div>
      </body>
    </html>
  );
}
