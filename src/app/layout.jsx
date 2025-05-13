import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Montserrat, Lora } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400','600','700'],
  variable: '--font-montserrat',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  weight: ['400','700'],
  variable: '--font-lora',
  display: 'swap',
})
export const metadata = {
  title: 'Treasured Care For You',
  description: 'Providing nurturing support and care services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className={`${montserrat.variable} ${lora.variable}`}>
          <head>
        <link rel="icon" href="/logo.jpg" sizes="128x128" type="image/png" />
      </head>
      <body className="font-serif">
        <Navbar />
        <main className="min-h-screen pt-16">  {/* page content */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
