"use client";
import { useState, useRef, useEffect } from "react";
import { Product } from "@/infrastructure/interfaces/product";
import GradientButton from "../buttons/GradientButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { addToCart, removeFromCart } from "@/redux/slices/cartSlice";
import { CgDanger } from "react-icons/cg";

type Props = {
  product: Product;
  currentProductName: string;
};

function CrossUpCard({ product, currentProductName }: Props) {
  const dispatch = useDispatch();
  const cardRef = useRef<HTMLDivElement>(null);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartItem = cartItems.find((item) => item.id === product.id);
  const quantityInCart = cartItem ? cartItem.quantity : 0;
  const availableStock = product.availableStock! - quantityInCart;
  const [showButtons, setShowButtons] = useState(false);

  const handleCardClick = () => setShowButtons(true);

  const handleClickOutside = (event: MouseEvent) => {
    if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
      setShowButtons(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      onClick={handleCardClick}
      ref={cardRef}
      className="relative border-4 border-[#1278ff] dark:border-[#4a90e2] rounded-3xl cursor-pointer dark:bg-gray-800 bg-white transition-all shadow-lg hover:shadow-2xl">
      <div className="p-3 w-full h-full">
        <div className="relative flex flex-col w-full items-center h-full justify-between gap-2">
          {product.promotionalPrice && (
            <div className="absolute top-4 right-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 dark:from-purple-400 dark:via-indigo-500 dark:to-blue-700 bg-[length:100%_120%_200%] animate-gradient text-white text-xs font-bold px-2 py-1 transform rotate-45 translate-x-4 -translate-y-3 shadow-lg">
              {(
                100 -
                (product.promotionalPrice * 100) / product.regularPrice
              ).toFixed(0)}
              % OFF
            </div>
          )}

          <div className="text-center text-white text-sm font-bold px-5 py-1 bg-[#1278ff] dark:bg-[#3a8bbf] rounded-lg w-full mx-auto">
            El combo perfecto
          </div>

          <p
            className="text-xs font-bold text-center h-8 px-5 text-wrap dark:text-gray-200"
            style={{ lineHeight: "1.1rem" }}>
            {product.name} + {currentProductName}
          </p>

          <img
            className="w-64 h-32 object-cover rounded-xl"
            src={product.images[0]}
            alt={`${product.name} image`}
          />
          <p
            className={`${
              availableStock < 10 && "text-red-500  hover-text"
            } flex flex-row items-center gap-1 justify-center relative`}>
            {availableStock < 10 && <CgDanger />}
            Stock: {availableStock > 0 ? availableStock : "Out of stock"}
          </p>
          <p className="dark:text-gray-200">
            Llevalo por:{" "}
            <b className="inline">
              $
              {product.promotionalPrice
                ? product.promotionalPrice
                : product.regularPrice}
            </b>
          </p>

          <GradientButton
            onClick={() => dispatch(addToCart({ product }))}
            label="AGREGAR AL CARRITO"
            className="text-white text-sm font-bold px-5 py-1 bg-[#1278ff] dark:bg-[#3a8bbf] rounded-lg w-full mx-auto"
            disabled={availableStock <= 0 || false}
          />
        </div>
      </div>
    </div>
  );
}

export default CrossUpCard;
