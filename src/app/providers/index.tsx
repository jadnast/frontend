import type { AppProps } from 'next/app';
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import NextNProgress from 'nextjs-progressbar';
import { Jost as FontSans } from "next/font/google";
import { useEffect } from 'react';

import { cn } from "@shared/libs/utils";
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
 
const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    document.documentElement.classList.add(fontSans.variable);
    return () => {
      document.documentElement.classList.remove(fontSans.variable);
    };
  }, []);

  return (
      <>
        <NextNProgress color="#EB0052" stopDelayMs={200} height={3} showOnShallow={true} />
        <Header className={cn("font-sans mt-5", fontSans.variable)}/>
        <main className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
            <Component {...pageProps} />
        </main>
        <Footer country="ru_RU" className={cn("font-sans mt-5", fontSans.variable)}/>
      </>
  )
}

export default App;