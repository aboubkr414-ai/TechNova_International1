import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://technovainternational.com"),
  title: "TechNova International | Empowering Future Innovators",
  description:
    "TechNova International inspires students through Coding, Artificial Intelligence, Robotics, STEM Education and the International Junior Coding Championship.",
  keywords: [
    "TechNova International",
    "International Junior Coding Championship",
    "IJCC",
    "STEM education",
    "coding competition for students",
    "robotics for schools",
    "AI education",
  ],
  openGraph: {
    title: "TechNova International | Empowering Future Innovators",
    description:
      "Coding, Artificial Intelligence, Robotics and STEM programs for schools worldwide — home of the International Junior Coding Championship.",
    url: "https://technovainternational.com",
    siteName: "TechNova International",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechNova International | Empowering Future Innovators",
    description:
      "Coding, Artificial Intelligence, Robotics and STEM programs for schools worldwide.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
