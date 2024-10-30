import { MainProductTitle } from "./Texts";

type Props = {
  totalPrice: number;
};

const TotalRow = ({ totalPrice }: Props) => (
  <div className="py-4 lg:px-4 flex flex-row justify-between">
    <MainProductTitle className="dark:text-gray-100">TOTAL:</MainProductTitle>
    <p className="text-xl font-semibold text-gray-800 dark:text-white">
      ${totalPrice.toFixed(2)}
    </p>
  </div>
);

export default TotalRow;
