"use client";
import { Product } from "@/infrastructure/interfaces/product";
import { motion } from "framer-motion";
import GradientButton from "../buttons/GradientButton";
import { ProductTitle, ProductDescription, PriceText } from "../Texts";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import { openPopup } from "@/redux/slices/productPopupSlice";

type Props = { product: Product };

const HomeProduct = ({ product }: Props) => {
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(addToCart({ product }));
    dispatch(openPopup(product.id));
  }, [dispatch, product]);

  return (
    <motion.div
      className="w-full max-w-[300px] flex-shrink-0 mb-10 flex flex-col justify-between bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 lg:p-4 mx-4 transition-all duration-300 hover:shadow-2xl transform  dark:hover:bg-gray-700"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}>
      <div className="relative overflow-hidden rounded-lg mb-4 flex justify-center">
        <img
          src={product.images[0] ?? "https://via.placeholder.com/150"}
          alt={product.name}
          className="w-full h-52 object-cover rounded-lg border border-gray-200 dark:border-gray-700"
        />
        {product.promotionalPrice && (
          <div className="absolute top-2 left-2 bg-blue-500 text-white px-3 py-1 text-xs font-bold rounded">
            Oferta
          </div>
        )}
      </div>

      <ProductTitle className="text-center mb-2">{product.name}</ProductTitle>

      <div className="text-center mb-4">
        {product.promotionalPrice ? (
          <>
            <PriceText className="line-through text-gray-400">
              ${product.regularPrice.toFixed(2)}
            </PriceText>
            <PriceText className="text-2xl font-bold text-green-600 dark:text-green-400">
              ${product.promotionalPrice.toFixed(2)}
            </PriceText>
          </>
        ) : (
          <PriceText className="text-2xl font-bold">
            ${product.regularPrice.toFixed(2)}
          </PriceText>
        )}
      </div>

      <ProductDescription className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4">
        {product.shortDescription}
      </ProductDescription>

      <GradientButton onClick={handleClick} label="Añadir al carrito" />
    </motion.div>
  );
};

export default HomeProduct;
