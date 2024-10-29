"use client";
import { CartItem } from "@/infrastructure/interfaces/cart";
import { Product } from "@/infrastructure/interfaces/product";
import { removeFromCart, updateQuantity } from "@/redux/slices/cartSlice";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";

type Props = {
  item: CartItem;
  mainItem: boolean;
};

export function AddOrRemoveItems({ item, mainItem }: Props) {
  const dispatch = useDispatch();
  const isSubtractDisabled = item.quantity <= 1;
  return (
    <div className="flex items-center gap-2 flex-wrap justify-between">
      <button
        onClick={() =>
          dispatch(
            updateQuantity({
              id: item.id,
              quantity: item.quantity - 1,
            })
          )
        }
        disabled={isSubtractDisabled && mainItem}
        className="bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-100 px-2 py-1 rounded font-bold">
        -
      </button>
      <button
        onClick={() =>
          dispatch(
            updateQuantity({
              id: item.id,
              quantity: item.quantity + 1,
            })
          )
        }
        className="bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-100 px-2 py-1 rounded font-bold">
        +
      </button>
      <button
        disabled={mainItem}
        className="text-red-500 dark:text-red-400"
        onClick={() => dispatch(removeFromCart(item.id))}>
        <FaRegTrashAlt />
      </button>
    </div>
  );
}
