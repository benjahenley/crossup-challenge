type Props = {
  className: string;
};

const LineSeparator = ({ className }: Props) => {
  return (
    <div
      className={className + " border-t border-gray-300 dark:border-gray-700"}
    />
  );
};

export { LineSeparator };
