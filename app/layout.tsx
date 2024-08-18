import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import "@uploadthing/react/styles.css";
import { cn } from "@/lib/utils";
import { DataProvider } from "@/lib/context";
import { Toaster } from "sonner";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Make Your Link",
  description: "Make your link profile page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <DataProvider>
          <Toaster />
          {children}
        </DataProvider>
      </body>
    </html>
  );
}
