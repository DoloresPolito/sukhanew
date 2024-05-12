import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header';
import {
  Bebas_Neue,
  Barlow_Condensed,
  Barlow_Semi_Condensed,
} from "next/font/google";
// import { Inter, Montserrat, Lato, Bebas_Neue } from "next/font/google";

const bebasneue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebasneue",
});

const barlowcondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlowcondensed",
});

const barlowsemicondensed = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlowsemicondensed",
});





export const metadata = {
  title: 'Sukha Tents',
  description: 'Carpas para eventos',
}

export default function RootLayout({ children }) {

  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"></meta>
  
  return (
    <html lang="en">
      <body className={`${bebasneue.variable} ${barlowcondensed.variable} ${barlowsemicondensed.variable} font-sans`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
