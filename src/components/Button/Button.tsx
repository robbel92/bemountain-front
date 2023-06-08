import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  actionOnClick?: () => void;
  type?: "button" | "reset" | "submit";
  className?: string;
  aria_label?: string;
  disabled?: boolean;
}

const Button = ({
  actionOnClick,
  className,
  type,
  children,
  aria_label,
  disabled,
}: ButtonProps): JSX.Element => {
  return (
    <button
      onClick={actionOnClick}
      type={type}
      className={className}
      aria-label={aria_label}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
