
"use client";
import localFont from "next/font/local";
import Header from "./header/page";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
//import { Toaster } from "@/components/ui/toaster";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

/*export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
*/
export default function RootLayout({ children }) {
  const pathname = usePathname();

  const noHeaderPaths = ["/sign-in", "/sign-up"];

  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {/* Conditionally render the Header */}
          {!noHeaderPaths.includes(pathname) && <Header />}

          {/* Render the rest of the children */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}