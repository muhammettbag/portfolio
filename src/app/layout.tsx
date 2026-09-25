import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammet Bağ | Backend Developer",
  description: "Muhammet Bağ - Backend Developer Portfolio. .NET teknolojileriyle RESTful API ve backend sistemleri geliştiriyorum.",
  keywords: ["Muhammet Bağ", "Backend Developer", ".NET Developer", "C#", "ASP.NET Core", "Portfolio", "Software Engineer"],
  authors: [{ name: "Muhammet Bağ" }],
  creator: "Muhammet Bağ",
  openGraph: {
    title: "Muhammet Bağ | Backend Developer",
    description: "Backend geliştirme odaklı .NET teknolojileriyle RESTful API ve backend sistemleri geliştiren bir Bilgisayar Mühendisi.",
    url: "https://muhammetbag.com.tr",
    siteName: "Muhammet Bağ Portfolio",
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
