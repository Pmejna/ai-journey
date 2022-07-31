import type { FC, ReactNode } from "react";

import { StyledTestWrapper } from "./TestComponents.styles";

export interface TestProps {
    children: ReactNode;
}

const TestComponent: FC<TestProps> = ({children}) => {
    return (
        <StyledTestWrapper>
            {children}
        </StyledTestWrapper>
    );
}

export default TestComponent;
