import { CartItem } from "@/infrastructure/interfaces/cart";
import { QuantityControlButton } from "./buttons/QuantityControlButton";

type Props = {
  item: CartItem;
  isMain: boolean;
};

const CartItemRow = ({ item, isMain }: Props) => (
  <div className="group relative flex justify-between items-center my-2 pr-2 lg:pr-0 group">
    <div className="flex gap-4 w-full justify-between items-center">
      <div>
        <h4 className="font-semibold group-hover:font-bold text-gray-800 dark:text-gray-100">
          {item.name}&nbsp;
          <span className="whitespace-nowrap">x&nbsp;{item.quantity}</span>
        </h4>
        <p className="text-gray-500 dark:text-gray-400 line-clamp-1">
          Precio: ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>

      <QuantityControlButton item={item} mainItem={isMain} showRemove={true} />
    </div>
  </div>
);

export default CartItemRow;
