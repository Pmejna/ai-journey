import type { FC, ReactNode } from "react";

import type { Theme } from "@emotion/react";

interface TypographyProps {
  tag: HTMLElement;
  variant: keyof Theme["typography"];
  children: ReactNode;
}

export const Typography: FC<TypographyProps> = () => {
  return <Typography>{}</Typography>;
};
