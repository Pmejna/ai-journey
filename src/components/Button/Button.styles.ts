import type { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "small" | "medium";

export interface ButtonParams {
  variant: ButtonVariant;
  size: ButtonSize;
}

const buttonSize: Record<ButtonSize, string> = {
  small: "32px",
  medium: "40px",
};

const getPrimaryButtonStyle = ({ theme }: { theme: Theme }) => {
  return css`
    border: 2px solid ${theme.colors.primary[900]};
    border-radius: 4px;
    background-color: ${theme.colors.primary[500]};
    color: ${theme.colors.neutral[0]};
  `;
};

const getSecondaryButtonStyle = ({ theme }: { theme: Theme }) => {
  return css`
    border: 2px solid ${theme.colors.neutral[900]};
    border-radius: 4px;
    background-color: ${theme.colors.complementary["citrine"]};
    color: ${theme.colors.neutral[900]};
  `;
};

export const getButtonStyle = (variant: ButtonVariant) => {
  switch (variant) {
    case "secondary": {
      return getSecondaryButtonStyle;
    }
    case "primary": {
      return getPrimaryButtonStyle;
    }
    default: {
      return getPrimaryButtonStyle;
    }
  }
};

export const StyledButton = styled.button<ButtonParams>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({ size }) => buttonSize[size]};
  position: relative;
  transition: all 0.2s ease-in-out;
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }

  ${({ variant }) => getButtonStyle(variant)}
`;

export const Label = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
