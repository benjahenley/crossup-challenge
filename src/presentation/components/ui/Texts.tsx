type Props = {
  children: string;
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
      className={`${className} text-3xl font-semibold  text-gray-800 dark:text-gray-100`}>
      {children}
    </h3>
  );
}

function ProductTitle({ children, className = "" }: Props) {
  return (
    <h3
      className={`${className} uppercase text-xl font-semibold mt-2 text-gray-800 dark:text-gray-200`}>
      {children}
    </h3>
  );
}

function MainProductTitle({ children, className = "" }: Props) {
  return (
    <h2 className={`${className} text-xl md:text-xl font-semibold uppercase`}>
      {children}
    </h2>
  );
}
function MainProductText({ children, className = "" }: Props) {
  return (
    <p
      className={`${className} text-clip text-md font-normal line-clamp-3  text-gray-500 dark:text-gray-300`}>
      {children}
    </p>
  );
}

function ConfirmationText({ children }: Props) {
  return (
    <h4 className="font-bold text-lg lg:text-2xl text-gray-800 dark:text-gray-200">
      {children}
    </h4>
  );
}

export {
  PageTitle,
  ProductTitle,
  SectionTitle,
  MainProductTitle,
  MainProductText,
  ConfirmationText,
};
