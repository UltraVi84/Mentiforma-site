import type { Metadata } from "next";
import "./globals.css";
import { Inter, JetBrains_Mono, Manrope, Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { BridgeProvider } from "@/components/bridge-provider";
import { Toaster } from "@/components/ui/sonner";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const montserrat = Montserrat({
  subsets: ["cyrillic", "latin"],
  variable: "--font-montserrat",
  weight: ["600", "700", "800"],
});

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["cyrillic", "latin"],
  variable: "--font-jetbrains-mono",
});

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  variable: "--font-manrope",
  weight: "600",
});

const appName = "Mentiforma";

export const metadata: Metadata = {
  title: `${appName} — AI-студия одного эксперта`,
  description:
    "AI-студия одного эксперта. Креатив, реклама, вебинары, чат-боты — весь digital-цикл без менеджеров и согласований.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={cn(
        "font-sans",
        montserrat.variable,
        inter.variable,
        jetbrainsMono.variable,
        manrope.variable
      )}
    >
      <body className="antialiased min-h-screen bg-background text-foreground flex flex-col">
        <BridgeProvider />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
