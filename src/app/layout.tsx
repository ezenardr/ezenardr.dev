import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "@/styles/main.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rodolphe Ezenard",
  description: "Empowering Your Online Success with Tailored Web Solutions",
  metadataBase: new URL("https://ezenardr.dev"),
  alternates: {
    canonical: "https://ezenardr.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} dark`}>{children}</body>
    </html>
  );
}
