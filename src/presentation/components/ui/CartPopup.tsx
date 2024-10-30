"use client";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closePopup } from "@/redux/slices/productPopupSlice";
import axios from "axios";
import { Product, Shooter } from "@/infrastructure/interfaces/product";
import { RootState } from "@/redux/store";
import { IoArrowBackCircle } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import MainProduct from "./cards/MainProduct";
import Checkout from "./Checkout";
import EmblaCarousel from "./carrousel/CrossUpCardCarrousel";
import { OPTIONS } from "@/infrastructure/config/embla";
import ButtonPrimary from "./buttons/ButtonPrimary";
import ButtonSecondary from "./buttons/ButtonSecondary";
import { IoIosCloseCircle } from "react-icons/io";
import ItemAddedMessage from "./ItemAdded";
import { LineSeparator } from "./LineSeparator";

const CartPopup: React.FC = () => {
  const dispatch = useDispatch();
  const { selectedProductId, isPopupOpen } = useSelector(
    (state: RootState) => state.productPopup
  );
  const [mainProduct, setMainProduct] = useState<Shooter | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[] | null>(
    null
  );
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        dispatch(closePopup());
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dispatch]);

  useEffect(() => {
    const fetchProductData = async () => {
      if (selectedProductId) {
        try {
          const response = await axios.get(
            "https://api.npoint.io/a69824ca4c40ac8e783d"
          );

          const data = response.data.find(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (item: any) => item.shooter.id === selectedProductId
          );

          setMainProduct(data.shooter || null);
          setRelatedProducts(data.products || []);
        } catch (error) {
          console.error("Failed to fetch product data:", error);
        }
      }
    };

    fetchProductData();
  }, [selectedProductId]);

  if (!isPopupOpen || !mainProduct) return null;

  return (
    <AnimatePresence>
      {isPopupOpen && (
        <>
          <div className="bg-opacity-50 bg-black w-full fixed inset-0 h-full" />
          <motion.div
            className="absolute sm:left-5 sm:right-5 md:left-8 md:right-8 top-0 md:top-2 lg:top-3 xl:top-4 left-0 right-0 bottom-2 flex items-center justify-center z-50 rounded-xl max-h-fit overflow-scroll"
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "100vh", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}>
            <div
              ref={popupRef}
              className=" bg-white dark:bg-gray-900 text-black dark:text-gray-200 rounded-xl shadow-lg max-w-4xl w-full relative h-full overflow-y-scroll">
              <button
                onClick={() => dispatch(closePopup())}
                className="absolute top-4 right-5 text-black dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400">
                <IoIosCloseCircle size={32} />
              </button>
              <button
                onClick={() => dispatch(closePopup())}
                className="absolute top-4 left-4 md:hidden text-black dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400">
                <IoArrowBackCircle size={32} />
              </button>
              <section className="flex items-center flex-col overflow-hidden">
                <div className="overflow-hidden w-full max-h-[200px] rounded-t-xl md:hidden">
                  <img
                    src={mainProduct.images[1]}
                    alt={mainProduct.name}
                    className="w-full h-auto max-h-lg"
                  />
                </div>
              </section>
              <ItemAddedMessage></ItemAddedMessage>

              <div className="flex flex-col">
                <section className="w-full flex flex-col md:flex-row px-3 gap-2">
                  <div className="w-full md:w-2/5 lg:w-1/2 flex flex-col gap-2 justify-between">
                    <MainProduct product={mainProduct} />
                    <div className="px-2 hidden md:flex-col lg:flex-row gap-2 w-full md:flex">
                      <ButtonPrimary
                        className="w-full max-w-xl"
                        onClick={() => dispatch(closePopup())}
                        label="Volver atrás"
                      />
                      <ButtonSecondary
                        className="w-full max-w-xl"
                        onClick={() => {}}
                        label="Ir a Pagar"
                      />
                    </div>
                  </div>
                  <Checkout mainProduct={mainProduct as any} />
                </section>

                <LineSeparator className="my-3 mx-4" />

                <section className="max-w-4xl px-2 py-4 lg:py-0 mb-2 ">
                  <EmblaCarousel
                    products={relatedProducts!}
                    options={OPTIONS}
                    currentProduct={mainProduct}
                  />
                  <div className="flex flex-row gap-2 w-full md:hidden py-4 px-4 max-w-xl m-auto">
                    <ButtonPrimary
                      className="w-full max-w-xl"
                      onClick={() => dispatch(closePopup())}
                      label="Volver atrás"
                    />
                    <ButtonSecondary
                      className="w-full max-w-xl"
                      onClick={() => {}}
                      label="Ir a Pagar"
                    />
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartPopup;
