import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { Jost as FontSans } from "next/font/google";

import { cn } from "@shared/libs/utils";
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
 
const App = ({ Component, pageProps }: AppProps) => {
  return (
      <>
        <NextNProgress color="#EB0052" stopDelayMs={200} height={3} showOnShallow={true} />
    
        <main className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
            <Component {...pageProps} />
        </main>
      </>
  )
}

export default App;