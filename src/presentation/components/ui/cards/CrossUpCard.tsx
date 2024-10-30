"use client";
import { useRef } from "react";
import { Product } from "@/infrastructure/interfaces/product";
import GradientButton from "../buttons/GradientButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { addToCart } from "@/redux/slices/cartSlice";
import { CgDanger } from "react-icons/cg";
import { AiOutlinePlusCircle } from "react-icons/ai";

type Props = {
  product: Product;
  currentProduct: Product;
};

function CrossUpCard({ product, currentProduct }: Props) {
  const dispatch = useDispatch();
  const cardRef = useRef<HTMLDivElement>(null);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartItem = cartItems.find((item) => item.id === product.id);
  const quantityInCart = cartItem ? cartItem.quantity : 0;
  const availableStock = product.availableStock! - quantityInCart;

  return (
    <div
      onClick={() => dispatch(addToCart({ product }))}
      ref={cardRef}
      className="group relative border-4 border-[#1278ff] dark:border-[#4a90e2] rounded-3xl hover:scale-[0.98] cursor-pointer dark:bg-gray-800 bg-white transition-all shadow-lg hover:shadow-xl">
      <div className="p-3 w-full h-full">
        <div className="relative flex flex-col w-full items-center h-full justify-between gap-2">
          {/* Etiqueta de Promoción */}
          {product.promotionalPrice && (
            <div className="custom-ribbon">
              {(
                100 -
                (product.promotionalPrice * 100) / product.regularPrice
              ).toFixed(0)}
              % OFF
            </div>
          )}

          {/* Simbolo Plus */}
          <div className="absolute  text-black right-0 left-[-30px] top-[-30px] z-990 pointer-events-none">
            <div className="w-fit h-fit bg-white group-hover:bg-gray-200 group-hover:scale-90 rounded-full pointer-events-auto cursor-pointer">
              <AiOutlinePlusCircle
                className="text-5xl"
                onClick={() =>
                  dispatch(addToCart({ product }))
                }></AiOutlinePlusCircle>
            </div>
          </div>

          <div className="text-center text-white text-sm font-bold px-5 py-1 bg-[#1278ff] dark:bg-[#3a8bbf] rounded-lg w-full mx-auto">
            El combo perfecto
          </div>

          <p
            className="text-xs font-bold text-center h-8 px-5 text-wrap dark:text-gray-200"
            style={{ lineHeight: "1.1rem" }}>
            {product.name} + <br />
            {currentProduct!.name}
          </p>

          <img
            className="w-52 h-32 object-cover rounded-xl"
            src={
              product.images[0] ||
              "https://fastly.picsum.photos/id/237/200/200.jpg?hmac=zHUGikXUDyLCCmvyww1izLK3R3k8oRYBRiTizZEdyfI"
            }
            alt={`${product.name} image`}
            onError={(e) => {
              e.currentTarget.src =
                "https://fastly.picsum.photos/id/237/200/200.jpg?hmac=zHUGikXUDyLCCmvyww1izLK3R3k8oRYBRiTizZEdyfI";
            }}
          />

          <div className="">
            <p
              className={`${
                availableStock < 10 && "text-red-500  hover-text"
              } flex flex-row items-center gap-1 justify-center relative`}>
              {availableStock < 10 && <CgDanger />}
              Stock: {availableStock > 0 ? availableStock : "Out of stock"}
            </p>
            <p className="dark:text-gray-200 ">
              Llevalo por:{" "}
              <b className="inline">
                $
                {product.promotionalPrice
                  ? product.promotionalPrice
                  : product.regularPrice}
              </b>
            </p>
          </div>

          <GradientButton
            label="AGREGAR AL CARRITO"
            className="text-white text-sm font-bold px-5 py-1 rounded-lg w-full mx-auto"
            disabled={availableStock <= 0 || false}
          />
        </div>
      </div>
    </div>
  );
}

export default CrossUpCard;
