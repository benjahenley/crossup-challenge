"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { AddOrRemoveItems } from "./buttons/AddOrRemoveItems";

type Props = {
  mainProduct: any;
};

const Checkout = ({ mainProduct }: Props) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const { isPopupOpen } = useSelector((state: RootState) => state.productPopup);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const price = cartItems.reduce((total, item) => {
      const price = item.price ?? 0;
      const quantity = item.quantity ?? 0;
      return total + price * quantity;
    }, 0);

    setTotalPrice(price);
  }, [cartItems, isPopupOpen]);

  return (
    <div className="w-full lg:w-1/2 bg-slate-50 dark:bg-gray-800 rounded-lg shadow-lg px-3">
      <h3 className="text-2xl font-semibold lg:px-4 pt-5 lg:pt-5 text-gray-800 dark:text-gray-100">
        Carrito
      </h3>
      <div className="max-h-[50vh] lg:max-h-[230px] overflow-scroll scrollbar-visible lg:px-4 mr-2">
        {cartItems.map((item, key) => {
          const isMain = item.id === mainProduct.id;
          return (
            <div key={key}>
              <div className="border-t border-gray-300 dark:border-gray-600 w-full my-2" />
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                      {item.name} x {item.quantity}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      Precio: ${item.price}
                    </p>
                  </div>
                </div>
                <AddOrRemoveItems
                  item={item}
                  mainItem={isMain}></AddOrRemoveItems>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t border-gray-300 dark:border-gray-600 py-4 lg:px-4 flex flex-row justify-between">
        <p className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          Total:{" "}
        </p>
        <p className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          ${totalPrice.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Checkout;
