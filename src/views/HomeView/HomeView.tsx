import { MainLayout } from "layouts/MainLayout/MainLayout";
import type { HomeProps } from "pages";

import { StyledHeading } from "./HomeView.styles";

export const HomeView = ({ pageData }: HomeProps) => {
  const heading = pageData.headingText as string;
  return (
    <MainLayout>
      <StyledHeading>{heading}</StyledHeading>
    </MainLayout>
  );
};
