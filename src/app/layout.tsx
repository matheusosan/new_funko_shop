import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter, Roboto_Flex } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto_Flex({ subsets: ["latin"] });

export const metadata = {
  title: "Home | FunkoShop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} + ${roboto.className} `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
