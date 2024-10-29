"use client";

import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import GradientButton from "./buttons/GradientButton";
import { openPopup } from "@/redux/slices/productPopupSlice";
import useEmblaCarousel from "embla-carousel-react";
import { Product } from "@/infrastructure/interfaces/product";
import { addToCart } from "@/redux/slices/cartSlice";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./embla/EmblaCarouselArrowButtons";
import { OPTIONS } from "@/infrastructure/config/embla";
import { PageTitle, ProductTitle } from "./Texts";

const ProductCarousel: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useDispatch();
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://api.npoint.io/a69824ca4c40ac8e783d"
        );
        setProducts(response.data.map((item: any) => item.shooter));
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleClick = useCallback(
    (product: Product) => {
      dispatch(addToCart({ product }));
      dispatch(openPopup(product.id));
    },
    [dispatch]
  );

  return (
    <section className="embla relative px-4 lg:px-10 py-6 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="px-2 py-5 text-center">
        <PageTitle className="uppercase">Productos</PageTitle>
      </div>

      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="flex-shrink-0 mb-10 flex flex-col justify-between bg-white dark:bg-gray-800 shadow-lg rounded-lg p-5 mx-4 transition-all duration-300 transform hover:scale-95 hover:bg-gray-100 dark:hover:bg-gray-700"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-72 object-cover rounded-lg mb-3 border border-gray-200 dark:border-gray-700"
              />
              <ProductTitle>{product.name}</ProductTitle>
              <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mt-1">
                ${product.promotionalPrice || product.regularPrice}
              </p>
              <GradientButton
                onClick={() => handleClick(product)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400 transition-all"
                label="Add to Cart"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
