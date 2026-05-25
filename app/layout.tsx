import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TopNavbar } from "@/components/layout/TopNavbar";
import { BottomNavbar } from "@/components/layout/BottomNavbar";

export const metadata: Metadata = {
  title: "Studio Irham",
  description: "Personal branding, dokumentasi digital, karya, artikel, perjalanan belajar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TopNavbar />
          <main className="flex-1 pb-16 md:pb-0">
            {children}
          </main>
          <BottomNavbar />
        </ThemeProvider>
      </body>
    </html>
  );
}
