import styled from 'styled-components'

export const ServicesContainer = styled.div`
height: 1500px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #010606;

@media screen and (max-width: 2000px) {
    height: 1100px;
    display: column;
}

@media screen and (max-width: 1600px) {
    height: 1700px;
    display: grid;
}

@media screen and (max-width: 1130px) {
    height: 2000px;
    display: grid;
}
`


export const ServicesWrapper = styled.div`
justify-content: center;
z-index: auto;
max-width: 50px;
margin: 0 auto;
display: flex;
grid-template-columns; 1fr 1fr 1fr;
grid-gap: 16px;
padding: 0 100px;



@media screen and (max-width: 1600px) {
    grid-template-columns: 1fr 1fr;
    display: grid;
}

@media screen and (max-width: 1130px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    display: grid;
}
`


export const ServicesCard = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 1000px;
padding: 70px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`

export const ServicesIcon = styled.img`
height: 350px;
width: 400px;
margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom: 64px;

@media screen and (max-width: 480px) {
    font-size: 2 rem;
}
`

export const ServicesH2 = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
`

export const ServicesP = styled.p`
font-size: 1rem;
text-align: center;
`