import React from 'react';
import SectionHead from './SectionHead';
import { FaQuestion } from 'react-icons/fa';
import { faqs } from '../data';
import FAQ from './FAQ';
import { Container, Section } from '../ReusableStyledComponents/StyledComponents';

function FAQs() {
    return ( 
        <Section
        marginTop='5rem'
        padding='0 5rem'
        >
            <Container>
                <SectionHead icon={<FaQuestion />} title='FAQs'/>
                <Container
                display='grid'
                gridTemplateColumns='1fr 1fr'
                gap='1.5rem 5rem'
                alignItems='flex-start'
                marginTop='4rem'
                mediaLg='grid-template-columns: 1fr'
                mediaMd='margin-top: 3rem; gap: 1rem;'
                >
                    {
                        faqs.map(({ id, question, answer }) => {
                            return <FAQ key={id} 
                            question={question} 
                            answer={answer}/>
                        })
                    }
                </Container>
            </Container>
        </Section>
    );
}

export default FAQs;