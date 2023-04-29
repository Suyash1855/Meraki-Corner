import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/Components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Shop from "@/Components/Shop";
import ProductFeed from "@/Components/ProductFeed";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <ProductFeed />
    </>
  );
}
