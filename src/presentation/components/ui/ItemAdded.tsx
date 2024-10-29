"use client";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "@/redux/store";
import { resetItemAdded } from "@/redux/slices/cartSlice";
import { FaRegCheckCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const slotMachineVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 200,
      damping: 15,
      repeat: Infinity,
      repeatType: "mirror" as any,
    },
  },
  exit: { y: 50, opacity: 0 },
};

const ItemAddedMessage = () => {
  const { items } = useSelector((state: RootState) => state.cart);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (items.length) {
      setAnimationKey((prev) => prev + 1);
    }
  }, [items]);

  return (
    <section className="flex items-center flex-col">
      <motion.div
        key={animationKey}
        initial="visible"
        animate="visible"
        exit="exit"
        variants={slotMachineVariants}
        className="px-5 py-5 flex flex-row justify-start items-center w-full gap-3 lg:px-5">
        <motion.div className="flex items-center gap-3">
          <FaRegCheckCircle
            className="text-green-500 dark:text-green-400"
            size={26}
          />
          <h4 className="font-semibold lg:text-2xl text-gray-800 dark:text-gray-200">
            Producto añadido al carrito
          </h4>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ItemAddedMessage;
