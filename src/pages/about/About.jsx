import React from 'react';
import HeaderComponent from '../../components/Header';
import headerImage from '../../images/header_bg_1.jpg'
import { Container, Section } from '../../ReusableStyledComponents/StyledComponents';
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import styled from 'styled-components';

const SectionContainer = styled(Container)`
    display: grid;
    grid-template-columns: 40% 50%;
    gap: 10%;
    @media ${props => props.theme.media.large} {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
    @media ${props => props.theme.media.large} {
        gap: 2rem;
    }
`

const ImageContainer = styled(Container)`
    border-radius: 50%;
    transform: skew(15deg);
    overflow: hidden;
    transition: ${props => props.theme.transition};
    &:nth-child(2) {
        transform: skew(-15deg);
    }
    &:hover {
        transform: skew(0);
    }
    @media ${props => props.theme.media.large} {
        width: 60%;
        &:nth-child(2) {
        grid-row: 1;
        }
    }
    @media ${props => props.theme.media.tablet} {
        width: 80%;
        margin-inline: auto;
    }
`

const Content = styled(Container)`
    h1 {
        margin-bottom: 2rem;
    }
    p {
        margin-bottom: 1rem;
    }
    @media ${props => props.theme.media.large} {
        margin-bottom: 1.2rem;
    }
`

function About() {
    return ( 
        <>
        <HeaderComponent title='About Us' image={headerImage}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Libero sint magni laboriosam quod perspiciatis, 
            dolorum aspernatur aperiam omnis ipsam cum.
        </HeaderComponent>

        <Section marginTop='5rem' padding='0 5rem'>
            <SectionContainer>
                <ImageContainer>
                    <img src={StoryImage} alt="Story Image" />
                </ImageContainer>

                <Content>
                <h1>Our Story</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Maiores fugit ad
                neque quo, quas eius quam at sunt quod in atque 
                nulla minus nam impedit
                tempore consectetur esse quibusdam voluptatum 
                optio nemo! Aperiam veritatis
                delectus commodi. Minima tempora voluptates natus.
                </p>
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam harum
                corrupti quas voluptate, perferendis consectetur veritatis veniam, ratione,
                distinctio iste dignissimos alias ipsum minima consequuntur?
                </p>
                <p>
                Perferendis consectetur veritatis veniam, ratione, distinctio iste dignissimos
                alias ipsum minima consequuntur?
                </p>
                </Content>
            </SectionContainer>
        </Section>

        <Section marginTop='7rem' padding='0 5rem'>
            <SectionContainer>
                <Content>
                <h1>Our Vision</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Maiores fugit ad
                neque quo, quas eius quam at sunt quod in atque 
                nulla minus nam impedit
                tempore consectetur esse quibusdam voluptatum 
                optio nemo! Aperiam veritatis
                delectus commodi. Minima tempora voluptates natus.
                </p>
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam harum
                corrupti quas voluptate, perferendis consectetur veritatis veniam, ratione,
                distinctio iste dignissimos alias ipsum minima consequuntur?
                </p>
                </Content>
                <ImageContainer>
                    <img src={VisionImage} alt="Story Image" />
                </ImageContainer>
            </SectionContainer>
        </Section>

        <Section marginTop='7rem' padding='0 5rem'>
            <SectionContainer>
                <ImageContainer>
                    <img src={MissionImage} alt="Story Image" />
                </ImageContainer>

                <Content>
                <h1>Our Mission</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Maiores fugit ad
                neque quo, quas eius quam at sunt quod in atque 
                nulla minus nam impedit
                tempore consectetur esse quibusdam voluptatum 
                optio nemo! Aperiam veritatis
                delectus commodi. Minima tempora voluptates natus.
                </p>
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam harum
                corrupti quas voluptate, perferendis consectetur veritatis veniam, ratione,
                distinctio iste dignissimos alias ipsum minima consequuntur?
                </p>
                <p>
                Perferendis consectetur veritatis veniam, ratione, distinctio iste dignissimos
                alias ipsum minima consequuntur?
                </p>
                </Content>
            </SectionContainer>
        </Section>
        </>
    );
}

export default About;