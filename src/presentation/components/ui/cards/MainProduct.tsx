"use client";

import { Product } from "@/infrastructure/interfaces/product";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { QuantityControlButton } from "../buttons/QuantityControlButton";
import { MainProductText, MainProductTitle } from "../Texts";

type Props = {
  product: Product;
};

function MainProduct({ product }: Props) {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartItem = cartItems.find((item) => item.id === product.id);
  const [quantityInCart, setQuantityInCart] = useState(cartItem!.quantity);

  useEffect(() => {
    const quantity = cartItem!.quantity ?? 0;
    setQuantityInCart(quantity);
  }, [cartItems]);

  return (
    <>
      <div className="h-full m-auto md:m-0 flex flex-col md:flex-col lg:flex-row items-start w-full max-h-[300px] overflow-hidden">
        <div className="flex flex-row w-full h-full pb-2">
          <div className="h-full w-48 md:h-48 md:hidden lg:flex lg:h-32 flex items-center justify-center overflow-hidden rounded-lg">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full flex flex-col justify-between h-full px-2 md:px-0 lg:pl-2 ">
            <div className="mb-3">
              <MainProductTitle className="line-clamp-1 md:line-clamp-2">
                {product.name}{" "}
                <span className="whitespace-nowrap">
                  x&nbsp;{cartItem!.quantity}
                </span>
              </MainProductTitle>
              <MainProductText className="md:line-clamp-1 lg:line-clamp-2">
                {product.shortDescription}
              </MainProductText>
            </div>
            <div className="md:flex md:flex-row lg:inline justify-between items-end">
              <div className="w-32 md:h-32 md:flex lg:hidden lg:h-32 hidden items-center justify-between sm:justify-start sm:items-end overflow-hidden rounded-lg">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden sm:justify-end sm:flex mt-2 gap-1 text-right flex-col-reverse justify-end items-end space-y-2">
                <QuantityControlButton
                  item={cartItem!}
                  mainItem={true}
                  showRemove={false}
                />
                <div className="flex flex-col w-fit items-end">
                  {product.promotionalPrice && (
                    <span className="line-through text-gray-400 ml-2 whitespace-nowrap overflow-hidden overflow-ellipsis">
                      ${product.regularPrice * quantityInCart}
                    </span>
                  )}
                  <span className="font-semibold text-xl lg:text-2xl text-gray-800 dark:text-white">
                    $
                    {(
                      (product.promotionalPrice ?? product.regularPrice) *
                      quantityInCart
                    ).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex sm:hidden mt-2 text-right flex-row justify-end items-end space-y-2 w-full pr-3">
          <div className="flex flex-row gap-2 w-fit">
            {product.promotionalPrice && (
              <span className="line-through text-gray-400 ml-2 whitespace-nowrap overflow-hidden overflow-ellipsis">
                ${product.regularPrice * quantityInCart}
              </span>
            )}
            <span className="font-semibold text-xl lg:text-2xl mt-3 text-gray-800 dark:text-white">
              $
              {(
                (product.promotionalPrice ?? product.regularPrice) *
                quantityInCart
              ).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainProduct;
