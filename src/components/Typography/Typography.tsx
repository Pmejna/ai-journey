import type { ElementType, FC, ReactNode } from "react";

import type { Theme } from "@emotion/react";

import { TypographyStyled } from "./Typography.styles";

export interface TypographyProps {
  tag?: ElementType;
  variant?: keyof Theme["typography"];
  children?: ReactNode;
  color: string;
}

export const Typography: FC<TypographyProps> = ({
  children,
  tag,
  variant,
  color,
}) => {
  return (
    <TypographyStyled as={tag} variant={variant} color={color}>
      {children}
    </TypographyStyled>
  );
};
