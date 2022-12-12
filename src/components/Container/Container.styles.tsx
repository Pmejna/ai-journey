import { css } from "@emotion/react";
import styled from "@emotion/styled";

export type Size = "sm" | "md" | "lg" | "xl" | "full";

export interface ContainerParams {
  centered?: boolean;
  paddings?: string;
  size: Size;
}

export const containerSizes: Record<Size, string> = {
  sm: "640px",
  md: "768px",
  lg: "1104px",
  xl: "1320px",
  full: "100%",
};

export const StyledContainer = styled.div<ContainerParams>`
  width: 100%;
  background-color: transparent;
  ${({ size }) =>
    size &&
    css`
      max-width: ${containerSizes[size]};
    `}

  padding: ${({ paddings }) => paddings};
  ${({ centered }) => centered && "margin: 0 auto;"}
`;
