import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/sections/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata = {
  title: "RelentNet",
  description: "Empowering Your Online Vision",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="darknet"
      className={`${poppins.className} antialiased`}
    >
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
