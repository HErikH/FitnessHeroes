import React from 'react';
import HeaderComponent from '../../components/Header';
import HeaderImage from '../../images/header_bg_4.jpg';
import Card from '../../UI/Card';
import { plans } from '../../data';
import { Container, Section } from '../../ReusableStyledComponents/StyledComponents';
import styled from 'styled-components';

const PlansCard = styled(Card)`
    text-align: center;
    h3 {
        margin-bottom: 0.8rem;
    }
    small {
        margin-bottom: 2rem;
    }
    h1 {
        display: inline;
        color: ${props => props.theme.colors.primary};
    }
    h2 {
        display: inline;
        color: ${props => props.theme.colors.gray_400};
    }
    h4 {
        margin-top: 2rem;
    }
    p {
        margin-top: 1rem;
        color: ${props => props.theme.colors.gray_100};
    }
    p.disabled {
        color: ${props => props.theme.colors.gray_400};
    }
    button {
        margin-top: 3rem;
        cursor: pointer;
    }
    @media ${props => props.theme.media.tablet} {
        width: 90%;
        margin-inline: auto;
    }
`

function Plans() {
    return ( 
        <>
        <HeaderComponent title='Membership Plans' image={HeaderImage}>
        Assumenda perspiciatis asperiores deserunt quisquam, sit iusto consectetur vero
        similique aliquam.
        </HeaderComponent>
        <Section marginTop='5rem' padding='0 5rem'>
            <Container
            display='grid'
            gridTemplateColumns='repeat(3, 1fr)'
            gap='3rem'
            mediaLg='grid-template-columns: 1fr;'
            >
                {
                    plans.map(({ id, name, desc, price, features }) => {
                        return(
                            <PlansCard key={id}>
                                <h3>{name}</h3>
                                <small>{desc}</small>
                                <h1>{`$ ${price}`}</h1><h2>/mo</h2>
                                <h4>Features</h4>
                                {
                                    features.map(({ feature, available }, index) => {
                                        return (
                                        <p key={feature + index} 
                                        className={!available ? 'disabled' : ''}
                                        >
                                            {feature}
                                        </p>
                                        )
                                    })
                                }
                                <button className='btn lg'>Choose Plan</button>
                            </PlansCard>
                        )
                    })
                }
            </Container>
        </Section>
        </>
    );
}

export default Plans;