import React from 'react';
import { Container, StyledLink, Header, Side } from '../ReusableStyledComponents/StyledComponents';
import Image from '../images/main_header.png';
import styled from 'styled-components';

const HeaderMain = styled(Header)`
    .right-side:hover .circle {
        filter: blur(15px);
    } 
    @media ${props => props.theme.media.large} {
        height: fit-content;
        padding: 5rem 0;
        & > div {
            gap: 0;
        }
    }
    @media ${props => props.theme.media.tablet} {
        height: 100vh;
        margin-top: 0;
        padding: 12rem 0 0;
        & > div {
            grid-template-columns: 1fr;
        }
    }
`

const MainHeaderSide = styled(Side)`
    h4 {
        font-weight: 400;
        margin-bottom: 1rem;
        color: ${props => props.theme.colors.secondary};
    }
    p {
        font-size: 1.1rem;
        margin: 1rem 0 3.5rem;
    }
    @media ${props => props.theme.media.tablet} {
        &.right-side .image {
            display: none;
        }
    }
`

const Circle = styled.div`
    position: absolute;
    width: clamp(15rem, 35vw, 40vw);
    height: clamp(15rem, 35vw, 40vw);
    background: linear-gradient(75deg, 
    ${props => props.theme.colors.secondary}, transparent);
    border-radius: 50%;
    transition: ${props => props.theme.transition};
    @media ${props => props.theme.media.large} {
       width: 16rem;
       height: 16rem;
    }
    @media ${props => props.theme.media.tablet} {
        display: none;
    }
`

function MainHeader() {
    return ( 
        <HeaderMain
        width="100vw"
        height="calc(100vh - 3rem)"
        display="grid"
        placeItems="center"
        marginTop="5rem"
        >
            <Container
            width="80%"
            height='100%'
            display='grid'
            justifyContent='space-between'
            alignItems='center'
            gridTemplateColumns='1fr 1fr'
            gap='6rem'
            >
                <MainHeaderSide marginTop='-3rem' className='left-side'>
                    <h4>#100DaysOfWorkout</h4>
                    <h1>Join The Legends Of The Fitness World !</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Magnam officia est 
                        numquam maxime atque earum?
                    </p>
                    <StyledLink to='/plans' className='btn lg'> Get Started </StyledLink>
                </MainHeaderSide>

                <MainHeaderSide
                className='right-side'
                display='grid'
                position='relative'
                placeItems='center'
                >
                    <Circle className='circle'></Circle>
                    <div className='image' style={{position: 'relative'}}>
                        <img src={Image} alt="Main header image" />
                    </div>
                </MainHeaderSide>
            </Container>
        </HeaderMain>
    );
}

export default MainHeader;