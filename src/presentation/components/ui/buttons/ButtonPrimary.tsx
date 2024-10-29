import React from "react";

interface GradientButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const ButtonPrimary: React.FC<GradientButtonProps> = ({
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
      rounded-lg transition-all duration-200 ease-in-out 
      bg-blue-500 text-white hover:bg-blue-500 
      dark:bg-blue-500 dark:hover:bg-blue-500 dark:text-gray-100 
      ${disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-105"}`}>
      {label}
    </button>
  );
};

export default ButtonPrimary;
