import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const ButtonPrimary: React.FC<ButtonProps> = ({
  label,
  onClick,
  className,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className} shadow-xl py-1 font-semibold rounded-lg transition-all duration-200 ease-in-out bg-[#1278ff] dark:bg-[#3a8bbf] text-white dark:text-gray-100 
      ${disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-95"}`}>
      {label}
    </button>
  );
};

const ButtonSecondary: React.FC<ButtonProps> = ({
  label,
  onClick,
  className,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className} shadow-xl py-1 font-semibold text-[#1278ff] border-2 border-[#1278ff] hover:bg-[#1278ff] rounded-lg transition-all duration-200 ease-in-out hover:text-white dark:text-[#3a8bbf] dark:border-[#3a8bbf] dark:hover:bg-[#3a8bbf] dark:hover:text-gray-800 
      ${disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-95"}`}>
      {label}
    </button>
  );
};

export { ButtonPrimary, ButtonSecondary };
