import React, { useState } from 'react';
import SectionHead from './SectionHead';
import { ImQuotesLeft } from 'react-icons/im';
import Card from '../UI/Card';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import { testimonials } from '../data';
import { Container, Section } from '../ReusableStyledComponents/StyledComponents';
import styled from 'styled-components';

const TestimonialsCard = styled(Card)`
    &:hover div {
        border-radius: 50%;
        border-color: ${props => props.theme.colors.secondary};
    }
    p {
        font-style: italic;
        margin: 1rem 0 2rem;
    }
    small {
        margin-top: 0.3rem;
    }
`

const Button = styled.button`
    background: transparent;
    cursor: pointer;
    svg {
        width: 3rem;
        height: 3rem;
        font-size: 1.8rem;
        fill: ${props => props.theme.colors.primary};
    }
`

function Testimonials() {
    const [index, setIndex] = useState(0);
    const {name, quote, job, avatar} = testimonials[index];
    
    function changeCardInfo(action) {

        setIndex(prev => {
            return action == 'inc' ?
            prev + 1 :
            prev - 1
        })
        if (index >= testimonials.length - 1) {
            setIndex(0)
        }
        if (index <= 0) {
            setIndex(testimonials.length - 1)
        }
    }

    return ( 
        <Section 
        width='50rem'
        marginTop='5rem'
        marginInline='auto'
        padding='0 5rem'
        mediaLg='width: 75%;'
        mediaMd='width: 100%;'
        >
            <Container>
                <SectionHead icon={<ImQuotesLeft />} title='Testimonials'/>
                <TestimonialsCard 
                position='relative'
                marginTop='4rem' 
                textAlign='center'
                > 
                    <Container
                    position='absolute'
                    width='4rem'
                    height='4rem'
                    border='2px solid transparent'
                    borderRadius='1.5rem'
                    overflow='hidden'
                    top='-2rem'
                    left='calc(50% - 2rem)'
                    boxShadow='0 1.5rem 2rem rgba(26, 26, 54, 0.4)'
                    transition='theme.transition'
                    >
                        <img src={avatar} alt={name} />
                    </Container>
                    <p>{`"${quote}"`}</p>
                    <h5>{name}</h5>
                    <small>{job}</small>
                </TestimonialsCard>

                <Container
                width='fit-content'
                display='flex'
                justifyContent='center'
                alignItems='center'
                gap='1rem'
                margin='2.5rem auto 0'
                >
                    <Button onClick={() => changeCardInfo('dec')}>
                        <IoIosArrowDropleftCircle />
                    </Button>

                    <Button onClick={() => changeCardInfo('inc')}>
                        <IoIosArrowDroprightCircle />
                    </Button>
                </Container>
            </Container>
        </Section>
    );
}

export default Testimonials;