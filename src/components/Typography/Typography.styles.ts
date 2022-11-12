import styled from "@emotion/styled";
import isPropValid from '@emotion/is-prop-valid';

import type { TypographyProps } from "./Typography";

export const TypographyStyled = styled('p', {shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'color'})<TypographyProps>`
  font-family: ${({ theme, variant }) => theme.typography[variant]};
  color: ${({ theme, color }) => (color ? color : theme.colors.neutral[900])};
`;
