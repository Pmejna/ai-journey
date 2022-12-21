import { Button, Container, Typography } from "components";

import { MainLayout } from "layouts/MainLayout/MainLayout";

import type { HomeProps } from "pages";

import { StyledHero } from "./HomeView.styles";

export const HomeView = ({ pageData }: HomeProps) => {
  const heading = pageData.headingText as string;
  return (
    <MainLayout>
      <Container centered size="full">
        <StyledHero>
          <Typography tag="h1" variant="h1">
            {heading}
          </Typography>
          <Button variant="primary">Hello world</Button>
        </StyledHero>
      </Container>
    </MainLayout>
  );
};
