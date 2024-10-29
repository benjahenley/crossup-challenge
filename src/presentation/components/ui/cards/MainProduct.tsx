"use client";
import { Product } from "@/infrastructure/interfaces/product";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { AddOrSubtractItems } from "../buttons/AddOrSubtractItems";

type Props = {
  product: Product;
};

function MainProduct({ product }: Props) {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartItem = cartItems.find((item) => item.id === product.id);
  const [quantityInCart, setQuantityInCart] = useState(0);
  useEffect(() => {
    const quantity = cartItem ? cartItem.quantity : 0;
    setQuantityInCart(quantity);
  });
  return (
    <>
      <div className="container flex flex-row items-start gap-4 w-full rounded-md">
        <div className="overflow-hidden rounded-l-lg  max-w-[200px]">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-auto max-w-[200px]"
          />
        </div>
        <div className="w-2/3 flex flex-col justify-between h-full">
          <div>
            <h2 className="text-lg font-semibold uppercase">{product.name}</h2>
            <p className="text-gray-600">{product.shortDescription}</p>
          </div>
          <div className="hidden lg:flex mt-2 w-full text-right flex-col justify-end items-end pr-5">
            <AddOrSubtractItems item={cartItem!} mainItem={true} />
            {product.promotionalPrice ? (
              <div className="flex flex-row gap-2 w-fit">
                <div className="flex flex-col">
                  <span className="line-through text-gray-400 ml-2">
                    ${product.regularPrice * quantityInCart}
                  </span>
                  <span className=" text-white font-bold ml-2">
                    x {cartItem?.quantity}
                  </span>
                </div>
                <span className=" font-semibold text-xl lg:text-2xl mt-3">
                  ${(product.promotionalPrice * quantityInCart).toFixed(2)}
                </span>
              </div>
            ) : (
              <div className="flex flex-row gap-2 w-fit">
                <span className=" text-white font-bold ml-2">
                  x {cartItem?.quantity}
                </span>
                <span className="text-gray-700 font-semibold text-xl lg:text-2xl w-fit">
                  ${(product.regularPrice * quantityInCart).toFixed(2)}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex lg:hidden mt-2 w-full items-center justify-between pr-5 px-2">
        <AddOrSubtractItems item={cartItem!} mainItem={true} />
        {product.promotionalPrice ? (
          <div className="flex flex-row gap-2 w-fit items-end">
            <span className=" text-white font-bold ml-2 items-end">
              x {cartItem?.quantity}
            </span>
            <div className="flex flex-col items-end">
              <span className="line-through text-gray-400 ml-2">
                ${(product.regularPrice * quantityInCart).toFixed(2)}
              </span>
              <span className=" font-semibold text-xl lg:text-3xl">
                ${(product.promotionalPrice * quantityInCart).toFixed(2)}
              </span>
            </div>
          </div>
        ) : (
          <div className="flex flex-row gap-2 w-fit">
            <span className=" text-white font-bold ml-2">
              x {cartItem?.quantity}
            </span>
            <span className="text-gray-700 font-semibold text-xl lg:text-2xl w-fit">
              ${(product.regularPrice * quantityInCart).toFixed(2)}
            </span>
          </div>
        )}
      </div>
    </>
  );
}

export default MainProduct;
