"use client";
import { Product } from "@/infrastructure/interfaces/product";
import { motion } from "framer-motion";
import GradientButton from "../buttons/GradientButton";
import { ProductTitle, ProductDescription, PriceText } from "../Texts";
import { useCallback } from "react";
import { addToCart } from "@/redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { openPopup } from "@/redux/slices/productPopupSlice";

type Props = {
  product: Product;
};

function HomeProduct({ product }: Props) {
  const dispatch = useDispatch();

  const handleClick = useCallback(
    (product: Product) => {
      dispatch(addToCart({ product }));
      dispatch(openPopup(product.id));
    },
    [dispatch]
  );

  return (
    <motion.div
      key={product.id}
      className="max-w-xs flex-shrink-0 mb-10 flex flex-col justify-between bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mx-4 transition-all duration-300 hover:shadow-2xl transform hover:scale-105 dark:hover:bg-gray-700"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}>
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={product.images[0] ?? "https://via.placeholder.com/150"}
          alt={product.name}
          className="w-full h-64 object-cover rounded-lg border border-gray-200 dark:border-gray-700"
        />
        {product.promotionalPrice && (
          <div className="absolute top-2 left-2 bg-blue-500 text-white px-3 py-1 text-xs font-bold rounded">
            Oferta
          </div>
        )}
      </div>

      {/* Product Title */}
      <ProductTitle className="text-center mb-2">{product.name}</ProductTitle>

      {/* Product Price */}
      <div className="text-center mb-4">
        {product.promotionalPrice ? (
          <div className="flex flex-col items-center">
            <PriceText className="line-through text-gray-400">
              ${product.regularPrice.toFixed(2)}
            </PriceText>
            <PriceText className="text-2xl font-bold text-green-600 dark:text-green-400">
              ${product.promotionalPrice.toFixed(2)}
            </PriceText>
          </div>
        ) : (
          <PriceText className="text-2xl font-bold">
            ${product.regularPrice.toFixed(2)}
          </PriceText>
        )}
      </div>

      <ProductDescription className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4">
        {product.shortDescription}
      </ProductDescription>

      <GradientButton
        onClick={() => handleClick(product)}
        label="Añadir al carrito"
      />
    </motion.div>
  );
}

export default HomeProduct;
