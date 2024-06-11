import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Guestbook App",
  description: "A Guestbook App built with Next.js",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header/>
          <main>
            {children}
          </main>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
