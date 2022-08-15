import styled from "@emotion/styled";
import Image from "next/image";

export const StyledFourOFour = styled.div`
    min-width: 100vw;
    min-height: calc(100vh - 100px);
    position:   relative;
`;

export const FourOFourImage = styled(Image)`
    height: 100%;
    width: auto;
    position: absolute;
    left: 0;
    top: 0;
`;