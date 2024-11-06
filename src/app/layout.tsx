import type { Metadata } from "next";
import ReduxProvider from "@/presentation/components/providers/ReduxProvider";
import ThemeProvider from "@/presentation/components/providers/ThemeProvider";
import "./globals.css";
import "./embla.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CrossUp Challenge",
  description: "Popup form created by Benja Henley",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={poppins.className}>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <ReduxProvider>
        <ThemeProvider>
          <body className=" antialiased min-h-screen w-full h-screen">
            {children}
          </body>
        </ThemeProvider>
      </ReduxProvider>
    </html>
  );
}
