import type { NextPage } from 'next';

import { StyledTestWrapper, StyledTitle } from 'components/TestComponent/TestComponents.styles';

const Home: NextPage = () => {
  return (
   <main>
    <StyledTestWrapper>
      <StyledTitle>test</StyledTitle>
    </StyledTestWrapper>
   </main>
  )
}

export default Home
