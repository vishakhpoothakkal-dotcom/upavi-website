import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
variable: "--font-inter",
subsets: ["latin"],
display: "swap",
});

const spaceGrotesk = Space_Grotesk({
variable: "--font-space-grotesk",
subsets: ["latin"],
display: "swap",
});

const siteName = "UPAVI";

const siteDescription =
"Discover UPAVI, the Malayali Association of the Central University of Andhra Pradesh. Explore our culture, events, student community, celebrations, and activities.";

export const metadata: Metadata = {
applicationName: siteName,

title: {
default: "UPAVI | Malayali Association, CUAP",
template: "%s | UPAVI",
},

description: siteDescription,

keywords: [
"UPAVI",
"UPAVI CUAP",
"Malayali Association",
"Central University of Andhra Pradesh",
"Kerala Students Association",
"Malayali Students",
"UPAVI Events",
"Onam Celebration",
"Student Community",
],

icons: {
icon: "/image/upavi black.png",
shortcut: "/image/upavi black.png",
apple: "/image/upavi black.png",
},

category: "education",

robots: {
index: true,
follow: true,
},

openGraph: {
title: "UPAVI | Malayali Association, CUAP",
description: siteDescription,
siteName,
type: "website",
locale: "en_IN",
},

twitter: {
card: "summary_large_image",
title: "UPAVI | Malayali Association, CUAP",
description: siteDescription,
},
};

export const viewport: Viewport = {
width: "device-width",
initialScale: 1,
themeColor: "#ffffff",
colorScheme: "light",
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return (
<html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}> <body className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-emerald-200 selection:text-emerald-950">{children}</body> </html>
);
}
