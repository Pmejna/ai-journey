import { useState, useRef, useEffect  } from "react";
import type { FC } from "react";
import type { LottiePlayer } from 'lottie-web';

import bgImage from 'resources/404-bg.png';
import lottieFile from 'resources/lotties/lottie.json'

import { StyledFourOFour, FourOFourImage, Lottie } from "./404View.styles";

const FourOFourView: FC = () => {
    const lottieRef = useRef<HTMLDivElement>(null);
    const [lottie, setLottie] = useState<LottiePlayer | null>(null);

    useEffect(() => {
        import('lottie-web/build/player/lottie_light').then((Lottie) => setLottie(Lottie.default));
      }, []);

    useEffect(() => {
        if (lottie && lottieRef.current) {
            lottie.loadAnimation({
              container: lottieRef.current,
              renderer: 'svg',
              loop: false,
              animationData: lottieFile,
              autoplay: true,
            });
        }
    }, [lottie]);

    return (
    <StyledFourOFour>
        <FourOFourImage src={bgImage} alt="Page Not found background image" layout="fill" objectFit="cover"/>
        <Lottie ref={lottieRef} />
    </StyledFourOFour> 
     );
    }
export default FourOFourView;