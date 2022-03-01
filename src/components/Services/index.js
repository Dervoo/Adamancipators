import React from 'react'
import Icon3 from '../../images/collection5.jpg'
import Icon2 from '../../images/collection4.jpg'
import Icon1 from '../../images/collection3.jpg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'
const Services = () => {
  return (
    <ServicesContainer id="collections">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Golden Dream</ServicesH2>
                <ServicesP>Natasha Nirishi's newest embrace.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Silver Dream</ServicesH2>
                <ServicesP>Akana Ral's winter by chimney times.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Shine brighter</ServicesH2>
                <ServicesP>Our newest star Amanda Graci's collection.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services