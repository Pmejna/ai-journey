import styled from "@emotion/styled";

export const StyledFooter = styled.footer`
    background-color: ${({theme}) => theme.colors.primary[700]};
    color: ${({theme}) => theme.colors.neutral[0]};
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;