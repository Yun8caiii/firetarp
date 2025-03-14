import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import {ThemeProvider} from "@/components/theme-provider"
// import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Fiya",
    description: "Tarp Protection",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar/>
            {children}
            {/* <Footer/> */}
        </ThemeProvider>
        </body>
        </html>
    );
}
