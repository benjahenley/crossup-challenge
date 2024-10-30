"use client";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "@/redux/store";
import { FaRegCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { ConfirmationText } from "./Texts";

const ItemAddedMessage = () => {
  const { items } = useSelector((state: RootState) => state.cart);
  const [prevTotalQuantity, setPrevTotalQuantity] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const currentTotalQuantity = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    // Check if total quantity increased
    if (currentTotalQuantity > prevTotalQuantity) {
      setAnimationKey((prev) => prev + 1);
    }
    setPrevTotalQuantity(currentTotalQuantity); // Update previous total quantity
  }, [currentTotalQuantity]);

  return (
    <section className="flex items-center flex-col">
      <motion.div
        key={animationKey}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
        className="px-5 py-5 flex flex-row justify-start items-center w-full gap-3 lg:px-5">
        <FaRegCheckCircle
          className="text-green-500 dark:text-green-400"
          size={26}
        />
        <ConfirmationText>Producto añadido al carrito</ConfirmationText>
      </motion.div>
    </section>
  );
};

export default ItemAddedMessage;
