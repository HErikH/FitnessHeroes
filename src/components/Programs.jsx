import React from 'react';
import { Container, Section, StyledLink } from '../ReusableStyledComponents/StyledComponents';
import { FaCrown } from 'react-icons/fa';
import SectionHead from './SectionHead';
import { programs } from '../data';
import Card from '../UI/Card';
import { AiFillCaretRight } from 'react-icons/ai';

function Programs() {
    return ( 
        <Section 
        marginTop="4rem" 
        padding="0 5rem"
        mediaMd='margin-top: 12rem;'
        >
            <Container>
                <SectionHead icon={<FaCrown />} title="Programs"/>
            </Container>

            <Container
            display='grid'
            gridTemplateColumns='repeat(4, 1fr)'
            gap='3rem'
            marginTop='4rem'
            mediaLg='grid-template-columns: 1fr 1fr;'
            mediaMd='grid-template-columns: 1fr; gap: 2rem; margin-top: 3rem;'
            >
                {
                    programs.map(({ id, icon, title, info, path}) => {
                        return (
                            <Card 
                            key={id}
                            mediaMd='width: 84%; margin: 0 auto;'
                            > 
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{info}</small>
                                <StyledLink to={path} className='btn sm'>
                                    Learn More
                                    <AiFillCaretRight />
                                </StyledLink>
                            </Card>
                        )
                    })
                }
            </Container>
        </Section> 
    );
}

export default Programs;