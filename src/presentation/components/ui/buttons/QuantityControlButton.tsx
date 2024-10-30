"use client";

import { CartItem } from "@/infrastructure/interfaces/cart";
import { updateQuantity, removeFromCart } from "@/redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaSquarePlus, FaSquareMinus } from "react-icons/fa6";
import React from "react";

type Props = {
  item: CartItem;
  mainItem?: boolean;
  showRemove?: boolean;
};

export const QuantityControlButton = React.memo(function QuantityControlButton({
  item,
  mainItem = false,
  showRemove = true,
}: Props) {
  const dispatch = useDispatch();
  const isSubtractDisabled = mainItem && item.quantity <= 1;

  return (
    <div
      className={`${
        showRemove && "lg:hidden group-hover:flex"
      } flex items-center gap-2 justify-between`}>
      <button
        onClick={() =>
          dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
        }
        disabled={isSubtractDisabled}
        className={`py-0 ${isSubtractDisabled ? "cursor-not-allowed" : ""}`}>
        <FaSquareMinus className="text-2xl icon-hover-primary" />
      </button>
      <button
        onClick={() =>
          dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
        }
        className="py-0">
        <FaSquarePlus className="text-2xl icon-hover-primary" />
      </button>
      {showRemove && (
        <button
          disabled={mainItem}
          onClick={() => dispatch(removeFromCart(item.id))}
          className={`text-red-500 dark:text-red-400 ${
            mainItem ? "cursor-not-allowed" : ""
          }`}>
          <FaRegTrashAlt className="hover:scale-110 text-xl" />
        </button>
      )}
    </div>
  );
});
