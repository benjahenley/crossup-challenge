import React from "react";

interface GradientButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const ButtonSecondary: React.FC<GradientButtonProps> = ({
  label,
  onClick,
  className,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className} shadow-xl px-6 py-1 font-semibold 
      text-blue-500 border-2 border-blue-500 rounded-lg 
      transition-all duration-200 ease-in-out
      hover:bg-blue-500 hover:text-white 
      dark:text-blue-300 dark:border-blue-300 dark:hover:bg-blue-300 dark:hover:text-gray-800 
      ${disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-105"}`}>
      {label}
    </button>
  );
};

export default ButtonSecondary;
