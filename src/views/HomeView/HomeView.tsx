import type { FC } from "react";

import { MainLayout } from "layouts/MainLayout/MainLayout";
import type { HomeProps } from "pages";

import { StyledHeading } from "./HomeView.styles";

interface HomeViewProps {
  pageData: HomeProps;
}

export const HomeView: FC<HomeViewProps> = ({ pageData }: HomeProps) => {
  const heading = pageData.headingText as string;
  return (
    <MainLayout>
      <StyledHeading>{heading}</StyledHeading>
    </MainLayout>
  );
};
