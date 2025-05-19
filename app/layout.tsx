import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { TasksProvider } from "@/hooks/useTask";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Construction Site Taskboard",
  description: "Task management for construction sites",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TasksProvider>{children}</TasksProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
