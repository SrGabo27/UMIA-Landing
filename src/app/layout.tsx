import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/shared/navbar";
import { Outfit, Sora } from "next/font/google";
import { Footer } from "./components/shared/footer";

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const outFit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "UMIA",
  description: "Unidad de Médicina Interna Ambulatoria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.className} ${outFit.className} antialiased `}>
        <div className="px-5 sm:px-10 xl:px-20">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
