import type { ButtonHTMLAttributes } from "react";
import "./index.css";

type Props = {
  variant?: "primary" | "outline";
  size?: "normal" | "small";
  to?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  variant = "primary",
  size = "normal",
  to,
  ...rest
}: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (to?.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(to);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className={`btn ${variant} ${size}`}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;