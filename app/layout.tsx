import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// We use a relative path here to avoid the @ alias issues
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Header } from "../components/layout/header";
import { Footer } from "../components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative flex min-h-screen flex-col bg-background text-foreground">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}