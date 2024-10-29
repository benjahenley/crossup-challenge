"use client";
import { Product } from "@/infrastructure/interfaces/product";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { AddOrSubtractItems } from "../buttons/AddOrSubtractItems";
import { MainProductText, MainProductTitle } from "../Texts";

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
      <div className="container flex flex-row md:flex-col lg:flex-row items-start gap-2 lg:gap-4 w-full">
        <div className="overflow-hidden md:overflow-visible lg:overflow-hidden rounded-lg min-w-32 max-w-40 w-full  sm:flex items-center justify-center ">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full"
          />
        </div>
        <div className="w-full flex flex-col justify-between h-full px-2">
          <div>
            <MainProductTitle className="line-clamp-2">
              {`${product.name} x ${cartItem!.quantity.toString()!}`}
            </MainProductTitle>
            <MainProductText>{product.shortDescription}</MainProductText>
          </div>
          <div className="hidden lg:flex mt-2 w-full text-right flex-col justify-end items-end ">
            <AddOrSubtractItems item={cartItem!} mainItem={true} />
            <div className="flex flex-row gap-2 w-fit">
              {product.promotionalPrice && (
                <span className="line-through text-gray-400 ml-2">
                  ${product.regularPrice * quantityInCart}
                </span>
              )}

              <span className=" font-semibold text-xl lg:text-2xl mt-3">
                $
                {(
                  (product.promotionalPrice ?? product.regularPrice) *
                  quantityInCart
                ).toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        <div className="flex lg:hidden px-2 w-fit md:w-full text-right flex-col justify-between h-full items-end md:flex-row md:justify-between">
          <AddOrSubtractItems item={cartItem!} mainItem={true} />
          <div className="flex flex-col-reverse md:flex-row gap-2 w-fit">
            {product.promotionalPrice && (
              <span className="line-through text-gray-400 ml-2">
                ${product.regularPrice * quantityInCart}
              </span>
            )}

            <span className=" font-semibold text-xl lg:text-2xl mt-3">
              $
              {(
                (product.promotionalPrice ?? product.regularPrice) *
                quantityInCart
              ).toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainProduct;
