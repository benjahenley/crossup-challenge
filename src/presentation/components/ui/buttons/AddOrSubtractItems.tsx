"use client";
import { CartItem } from "@/infrastructure/interfaces/cart";
import { updateQuantity } from "@/redux/slices/cartSlice";
import { useDispatch } from "react-redux";

type Props = {
  item: CartItem;
  mainItem?: boolean;
};

export function AddOrSubtractItems({ item, mainItem = false }: Props) {
  const dispatch = useDispatch();
  const isSubtractDisabled = item.quantity <= 1;
  return (
    <div className="flex items-center gap-2 md:gap-4 lg:gap-2 flex-wrap justify-between w-fit">
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
        className="md:scale-125 lg:scale-100 bg-gray-300 hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-400 text-gray-700 dark:text-gray-100 px-2 rounded font-bold">
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
        className="md:scale-125 lg:scale-100 hover:bg-gray-200 bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-400 text-gray-700 dark:text-gray-100 px-2  rounded font-bold">
        +
      </button>
    </div>
  );
}
