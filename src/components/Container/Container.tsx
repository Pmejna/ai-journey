import type { ElementType, FC, ReactNode } from "react";

import { StyledContainer } from "./Container.styles";
import type { Size } from "./Container.styles";

interface ContainerProps {
  children: ReactNode;
  size: Size;
  paddings?: string;
  tag: ElementType;
}

export const Container: FC<ContainerProps> = ({
  tag,
  size = "full",
  paddings,
  children,
}) => {
  return (
    <StyledContainer as={tag} size={size} paddings={paddings}>
      {children}
    </StyledContainer>
  );
};
