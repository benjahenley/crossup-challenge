import CartPopup from "@/presentation/components/ui/CartPopup";
import Navbar from "@/presentation/components/ui/navbar/page";
import ProductCarousel from "@/presentation/components/ui/ProductCarrousel";

export default async function Home() {
  return (
    <div className="w-full h-full m-auto bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <div className="mx-auto max-w-screen-xl w-full">
        <ProductCarousel />
        <CartPopup />
      </div>
    </div>
  );
}
