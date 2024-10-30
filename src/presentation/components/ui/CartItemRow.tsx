import { CartItem } from "@/infrastructure/interfaces/cart";
import { QuantityControlButton } from "./buttons/QuantityControlButton";

type Props = {
  item: CartItem;
  isMain: boolean;
};

const CartItemRow = ({ item, isMain }: Props) => (
  <div className="relative flex justify-between items-center my-2 pr-4 group">
    <div className="flex gap-4 w-full justify-between">
      <div>
        <h4 className="font-semibold text-gray-800 dark:text-gray-100">
          {item.name} x {item.quantity}
        </h4>
        <p className="text-gray-500 dark:text-gray-400">
          Precio: ${item.price * item.quantity}
        </p>
      </div>
      <QuantityControlButton item={item} mainItem={isMain} showRemove={true} />
    </div>
  </div>
);

export default CartItemRow;
