import ProductCarousel from "@/presentation/components/ui/carrousel/ProductCarrousel";
import CartPopup from "@/presentation/components/ui/CartPopup";
import Navbar from "@/presentation/components/ui/navbar/page";

export default function Home() {
  return (
    <div className="w-full h-full bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main className="mx-auto max-w-screen-xl w-full">
        <ProductCarousel />
        <CartPopup />
      </main>
    </div>
  );
}
