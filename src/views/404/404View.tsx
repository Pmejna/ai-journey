import type { FunctionComponent } from "react";

import bgImage from '../../resources/404-bg.png';

import { StyledFourOFour, FourOFourImage } from "./404View.styles";


const FourOFourView: FunctionComponent = () => {
    return (
    <StyledFourOFour>
        <FourOFourImage src={bgImage} alt="Page Not found background image" layout="fill" objectFit="cover"/>
    </StyledFourOFour> 
     );
}
 
export default FourOFourView;