"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { SectionTitle } from "./Texts";
import { LineSeparator } from "./LineSeparator";
import { FaCartShopping } from "react-icons/fa6";
import CartItemRow from "./CartItemRow";
import TotalRow from "./TotalRow";

type Props = {
  mainProduct: any;
};

const Checkout = ({ mainProduct }: Props) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const { isPopupOpen } = useSelector((state: RootState) => state.productPopup);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const price = cartItems.reduce(
      (total, item) => total + (item.price ?? 0) * (item.quantity ?? 0),
      0
    );
    setTotalPrice(price);
  }, [cartItems, isPopupOpen]);

  return (
    <div className="w-full md:w-3/5 lg:w-1/2 bg-slate-50 dark:bg-gray-800 rounded-lg shadow-lg px-3 lg:px-1 flex flex-col justify-between">
      <HeaderSection />
      <LineSeparator className="mx-0 md:mx-3" />

      <div className="h-full max-h-[300px] md:h-[180px] overflow-auto lg:px-4">
        {cartItems.map((item) => (
          <CartItemRow
            key={item.id}
            item={item}
            isMain={item.id === mainProduct.id}
          />
        ))}
      </div>

      <LineSeparator className="mx-0 lg:mx-3" />
      <TotalRow totalPrice={totalPrice} />
    </div>
  );
};

const HeaderSection = () => (
  <div className="flex flex-row items-center justify-between mb-2 px-0 lg:px-4 pt-3 lg:pt-4">
    <SectionTitle>Carrito</SectionTitle>
    <FaCartShopping className="text-3xl  text-gray-700 dark:text-gray-100" />
  </div>
);

export default Checkout;
