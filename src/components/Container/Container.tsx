import type { ElementType, FC, ReactNode } from "react";

import { StyledContainer } from "./Container.styles";
import type { Size } from "./Container.styles";

interface ContainerProps {
  children: ReactNode;
  centered?: boolean;
  paddings?: string;
  size: Size;
  tag: ElementType;
}

export const Container: FC<ContainerProps> = ({
  children,
  centered = false,
  paddings,
  size = "full",
  tag,
}) => {
  return (
    <StyledContainer
      as={tag}
      size={size}
      paddings={paddings}
      centered={centered}
    >
      {children}
    </StyledContainer>
  );
};
