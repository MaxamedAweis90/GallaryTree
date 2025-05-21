import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/landingpage/navbar";
import Footer from "@/landingpage/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GallaryTree - Keep Your Memories Accessible For You",
  description: "This is a GallaryTree app for Keeping Your images in a safe place and to find them easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
