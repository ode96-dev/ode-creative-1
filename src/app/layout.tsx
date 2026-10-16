import type { Metadata } from "next";
import "@fontsource-variable/google-sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Odeway — Creative Agency & Digital Innovation Studio",
  description:
    "Award-winning luxury digital design and development agency crafting immersive brand experiences, bespoke digital solutions, and high-performance web applications.",
  openGraph: {
    title: "Odeway — Creative Agency & Digital Innovation Studio",
    description:
      "Award-winning luxury digital design and development agency crafting immersive brand experiences, bespoke digital solutions, and high-performance web applications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Odeway — Creative Agency & Digital Innovation Studio",
    description:
      "Award-winning luxury digital design and development agency crafting immersive brand experiences, bespoke digital solutions, and high-performance web applications.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth`}>
      <body
        className="min-h-screen bg-[#FDFDFE] text-[#111116] font-sans antialiased selection:bg-[#6236FF] selection:text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
