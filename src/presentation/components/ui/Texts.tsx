type Props = {
  children: React.ReactNode;
  className?: string;
};

function PageTitle({ children, className = "" }: Props) {
  return (
    <h2
      className={`${className} text-shadow-lg text-3xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white`}>
      {children}
    </h2>
  );
}

function SectionTitle({ children, className = "" }: Props) {
  return (
    <h3
      className={`${className} text-3xl font-semibold text-gray-800 dark:text-gray-100`}>
      {children}
    </h3>
  );
}

function ProductTitle({ children, className = "" }: Props) {
  return (
    <h3
      className={`${className} uppercase text-xl font-semibold mt-2 text-gray-800 dark:text-white`}>
      {children}
    </h3>
  );
}

function MainProductTitle({ children, className = "" }: Props) {
  return (
    <h2
      className={`${className} text-gray-800 text-xl md:text-xl dark:text-white font-semibold uppercase`}>
      {children}
    </h2>
  );
}

function MainProductText({ children, className = "" }: Props) {
  return (
    <p
      className={`${className} text-clip text-sm md:text-base font-normal line-clamp-3 text-gray-500 dark:text-gray-300`}>
      {children}
    </p>
  );
}

function PriceText({ children, className = "" }: Props) {
  return (
    <p
      className={`${className} text-lg font-semibold text-gray-700 dark:text-gray-400`}>
      {children}
    </p>
  );
}

function StockText({ children, className = "" }: Props) {
  return (
    <p
      className={`${className} text-sm font-medium text-gray-500 dark:text-gray-400`}>
      {children}
    </p>
  );
}

function ConfirmationText({ children, className = "" }: Props) {
  return (
    <h4
      className={`${className} font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-white`}>
      {children}
    </h4>
  );
}

function ProductDescription({ children, className = "" }: Props) {
  return (
    <p
      className={`${className} text-md font-light text-gray-700 dark:text-gray-400 line-clamp-5`}>
      {children}
    </p>
  );
}

export {
  PageTitle,
  ProductTitle,
  SectionTitle,
  MainProductTitle,
  MainProductText,
  PriceText,
  StockText,
  ConfirmationText,
  ProductDescription,
};
