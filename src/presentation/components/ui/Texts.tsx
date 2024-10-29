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

function ProductTitle({ children, className = "" }: Props) {
  return (
    <h3
      className={`${className} uppercase text-xl font-semibold mt-2 text-gray-800 dark:text-gray-200`}>
      {children}
    </h3>
  );
}

export { PageTitle, ProductTitle };
