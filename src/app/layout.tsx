import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: "600",
});

const poppinsRegular = Poppins({
  variable: "--font-poppins-regular",
  weight: "400",
});

const poppinsBold = Poppins({
  variable: "--font-poppins-bold",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Better Future Finance",
  description: "Your Better Financial Future Starts Here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsRegular.variable} ${montserrat.variable} ${poppinsBold.variable} antialiased`}
      >
        <Header />
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start pt-[100px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
