import { Typography } from "components";
import { MainLayout } from "layouts/MainLayout/MainLayout";
import type { HomeProps } from "pages";

export const HomeView = ({ pageData }: HomeProps) => {
  const heading = pageData.headingText as string;
  return (
    <MainLayout>
      <Typography tag="h1" variant="h1">
        {heading}
      </Typography>
    </MainLayout>
  );
};
