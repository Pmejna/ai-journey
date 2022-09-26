import type { FC, ReactNode } from "react";

import { StyledMain } from "./Main.styles";

interface MainProps {
    children: ReactNode;
}
 
const Main: FC<MainProps> = ({children}) => {
    return ( 
        <StyledMain>
            {children}
        </StyledMain>
     );
}
 
export default Main;