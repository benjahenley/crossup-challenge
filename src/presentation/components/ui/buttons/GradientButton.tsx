import React from "react";

interface GradientButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  label,
  onClick,
  className,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className} max-h-[40px] px-6 py-2 font-semibold hover:scale-105 
      text-white rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
      bg-[length:100%_120%_200%] animate-gradient transition-all duration-200 ease-in-out 
      ${disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"} 
      dark:from-purple-400 dark:via-indigo-500 dark:to-blue-700`}>
      {label}
    </button>
  );
};

export default GradientButton;
