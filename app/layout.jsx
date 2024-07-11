import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Toaster } from "@/components/ui/toaster";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "VietHQ - Portfolio",
  description: "VietHQ - Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} font-primary bg-primary text-white leading-loose`}
      >
        <StairTransition />
        <Header />
        <PageTransition>{children}</PageTransition>
        <Toaster />
      </body>
    </html>
  );
}
