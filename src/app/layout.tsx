import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProviders } from "@/components/shared/theme-providers";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "SnipOS - The Developer's Everything Vault",
  description:
    "Store, version, and share code snippets, AI prompts, and micro-content in one place. Live REST API per snippet, burn-after-view secret sharing, and AI auto-tagging.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", jetbrainsMono.variable)}
      suppressHydrationWarning
    >
      <body className={cn("min-h-full flex flex-col", "font-mono antialiased")}>
        <ThemeProviders>{children}</ThemeProviders>
      </body>
    </html>
  );
}
