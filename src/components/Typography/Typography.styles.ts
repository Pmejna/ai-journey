import styled from "@emotion/styled";

import type { TypographyProps } from "./Typography";

export const TypographyStyled = styled.p<TypographyProps>`
  font-family: ${({ theme, variant }) => theme.typography[variant]};
  color: ${({ theme, color }) => (color ? color : theme.colors.neutral[900])};
`;
