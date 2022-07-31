import styled from "@emotion/styled";


export const StyledTestWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const StyledTitle = styled.h1`
    ${({ theme }) => theme.typography.h1}
`;