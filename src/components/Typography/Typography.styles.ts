import styled from "@emotion/styled";

import type { TypographyProps } from "./Typography";

export const TypographyStyled = styled.p<TypographyProps>`
  font-family: ${({ theme, variant }) =>
    variant ? theme.typography[variant] : theme.typography["pLarge"]};
  color: ${({ theme, color }) => (color ? color : theme.colors.neutral[900])};
`;
