import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: 'Treasured Care For You',
  description: 'Providing nurturing support and care services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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