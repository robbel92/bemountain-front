import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  actionOnClick: () => void;
  type: "button" | "reset" | "submit";
  className: string;
}

const Button = ({
  actionOnClick,
  className,
  type,
  children,
}: ButtonProps): JSX.Element => {
  return (
    <button onClick={actionOnClick} type={type} className={className}>
      {children}
    </button>
  );
};

export default Button;
