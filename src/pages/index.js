import Navbar from "@/Components/Navbar";
import ProductFeed from "@/Components/ProductFeed";

import Footer from "@/Components/Footer";
import HeroSection from "@/Components/HeroSection";
export default function Home() {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <ProductFeed />
      <Footer />
    </main>
  );
}
