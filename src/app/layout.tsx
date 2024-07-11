import { Navbar } from "@/components/navbar";
import TanStackProvider from "@/components/providers/tan-stack-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stripe Subscriptions",
  description: "Learn how to integrate Stripe subscriptions with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TanStackProvider>
            <Navbar />
            {children}
          </TanStackProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}