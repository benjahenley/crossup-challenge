"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { AddOrRemoveItems } from "./buttons/AddOrRemoveItems";
import { MainProductTitle, SectionTitle } from "./Texts";
import { LineSeparator } from "./LineSeparator";
import { FaCartShopping } from "react-icons/fa6";

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
    <div className="w-full md:w-3/5 lg:w-1/2 bg-slate-50 dark:bg-gray-800 rounded-lg shadow-lg px-3 lg:px-1 flex flex-col justify-between">
      <div>
        <div className="flex flex-row items-center justify-between mb-2 px-0 lg:px-4 pt-5 lg:pt-5">
          <SectionTitle>Carrito</SectionTitle>
          <FaCartShopping className="text-3xl mx-2 dark:text-white text-black"></FaCartShopping>
        </div>

        <LineSeparator className="mx-0 md:mx-3" />
        <div className="h-full max-h-[300px] md:h-[180px] overflow-scroll scrollbar-visible lg:px-4 ">
          {cartItems.map((item, key) => {
            const isMain = item.id === mainProduct.id;
            return (
              <div key={key}>
                <div className="relative flex justify-between items-center my-2 pr-4 group">
                  <div className="flex gap-4 ">
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                        {item.name} x {item.quantity}
                      </h4>
                      <p className="text-gray-500 dark:text-gray-400">
                        Precio: ${item.price}
                      </p>
                    </div>

                    <AddOrRemoveItems
                      item={item}
                      mainItem={isMain}></AddOrRemoveItems>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <LineSeparator className="mx-0 lg:mx-3" />
        <div className="py-4 lg:px-4 flex flex-row justify-between">
          <MainProductTitle>TOTAL: </MainProductTitle>
          <p className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            ${totalPrice.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
