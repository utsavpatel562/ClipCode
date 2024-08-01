import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ClipCode",
  description: "Your coding snippet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "#888 #000",
      }}
    >
      <ClerkProvider>
        <body
          className={poppins.className}
          style={{
            background: "#000",
          }}
        >
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
