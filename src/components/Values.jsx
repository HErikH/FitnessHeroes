import React from 'react';
import image from '../images/values.jpg';
import SectionHead from './SectionHead';
import { GiCutDiamond } from 'react-icons/gi';
import { values } from '../data'
import Card from '../UI/Card';
import { Container, Section, Side } from '../ReusableStyledComponents/StyledComponents';
import styled from 'styled-components';

const ValuesSide = styled(Side)`
    .values__image {
        filter: saturate(0.25);
        transition: ${props => props.theme.transition};
        &:hover {
        filter: saturate(1);
        }
    }
    &.right-side > p {
        margin: 1.5rem 0 5rem;
    }
    @media ${props => props.theme.media.large} {
        .values__image {
            display: none;
        }
    }
`

const ValuesCard = styled(Card)`
    position: relative;
    padding-top: 3.5rem;
    text-align: left;
    span {
        position: absolute;
        top: -1.5rem;
    }
    @media ${props => props.theme.media.tablet} {
       width: 84%;
       margin-inline: auto;
    }
`

function Values() {
    return ( 
        <Section padding="0 5rem" marginTop='5rem'>
            <Container
            display="grid"
            gridTemplateColumns="38% 50%"
            gap="12%"
            mediaLg='grid-template-columns: 1fr; 
            justify-content: center;
            gap: 4rem;'
            >
                <ValuesSide className='left-side'>
                    <div className='values__image'>
                    <img src={image} alt="Values Image" />
                    </div>
                </ValuesSide>

                <ValuesSide className='right-side'>
                    <SectionHead icon={<GiCutDiamond />} title="Values" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Rerum quaerat animi officia.
                    </p>
                    <Container
                    display="grid"
                    gridTemplateColumns="1fr 1fr"
                    gap='3.4rem 2.4rem'
                    marginTop='5rem'
                    mediaLg='gap: 4rem 3rem;'
                    mediaMd='grid-template-columns: 1fr; gap: 3rem;'
                    >
                        {
                            values.map(({ id, icon, title, desc }) => {
                                return (
                                    <ValuesCard key={id}>
                                        <span>{icon}</span>
                                        <h4>{title}</h4>
                                        <small>{desc}</small>
                                    </ValuesCard>
                                )
                            })
                        }
                    </Container>
                </ValuesSide>
            </Container>
        </Section>
    );
}

export default Values;