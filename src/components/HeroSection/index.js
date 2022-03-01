import React, {useState} from 'react'
import {ButtonLink, HeroContainer, HeroBackground, VideoBackground, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from "./HeroElements";
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElement';


const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
  return (
    <HeroContainer id='home'>
        <HeroBackground>
            <VideoBackground autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBackground>
        <HeroContent>
            <HeroH1>Make Yourself Shine Brighter Than Diamonds</HeroH1>
            <HeroP>Sign up and receive 100$ discount on the newest products from series "Brilliant Secret" </HeroP>
            <HeroBtnWrapper>
                <ButtonLink to="/signin" color="green" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}>
                    Get started {hover ? <ArrowForward /> : <ArrowRight />}
                </ButtonLink>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection