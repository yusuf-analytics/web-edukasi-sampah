import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Pilah Sampah Bijak - KKN Lebak Gede 2",
  description: "Gerakan pemilahan sampah organik, anorganik, dan residu demi lingkungan Lebak Gede yang lestari dan terbebas dari darurat sampah.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${poppins.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.svg" />
      </head>
      <body className="min-h-full font-sans bg-black text-white selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
