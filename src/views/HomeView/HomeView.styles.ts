import styled from "@emotion/styled";

export const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.complementary["dark-blue"]};

  h1,
  h2,
  p,
  span {
    color: ${({ theme }) => theme.colors.neutral[0]};
  }
`;
