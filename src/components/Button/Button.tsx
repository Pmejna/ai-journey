import { forwardRef } from "react";
import type { ReactNode, ButtonHTMLAttributes } from "react";

import type { ButtonSize, ButtonVariant } from "./Button.styles";
import { StyledButton } from "./Button.styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  tag?: "button" | "a";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, size = "medium", tag, variant = "primary", ...props }, ref) => {
    return (
      <StyledButton as={tag} size={size} variant={variant} ref={ref} {...props}>
        {children}
      </StyledButton>
    );
  }
);
