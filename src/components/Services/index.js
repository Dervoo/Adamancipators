import React from 'react'
import Icon1 from '../../images/svg-2.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-2.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'
const Services = () => {
  return (
    <ServicesContainer id="collections">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Other Shit</ServicesH2>
                <ServicesP>We help we need</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Other Shit</ServicesH2>
                <ServicesP>We help we need</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Other Shit</ServicesH2>
                <ServicesP>We help we need</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services