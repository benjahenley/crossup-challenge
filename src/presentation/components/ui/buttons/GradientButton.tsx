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
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${className} max-h-[40px] px-6 py-2 font-bold hover:scale-105 
      text-white rounded-lg bg-custom-gradient animate-gradient transition-all duration-200 ease-in-out 
      ${disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"}`}>
      {label}
    </button>
  );
};

export default GradientButton;
