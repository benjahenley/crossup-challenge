import { MainProductTitle } from "./Texts";

type Props = {
  totalPrice: number;
};

const TotalRow = ({ totalPrice }: Props) => (
  <div className="py-4 lg:px-4 flex flex-row justify-between">
    <MainProductTitle>TOTAL:</MainProductTitle>
    <p className="text-xl font-semibold text-gray-800 dark:text-gray-100">
      ${totalPrice.toFixed(2)}
    </p>
  </div>
);

export default TotalRow;
