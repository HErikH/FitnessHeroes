import React from 'react';
import styled from 'styled-components';
import { Container } from '../ReusableStyledComponents/StyledComponents';
import Card from '../UI/Card';

const TrainerCard = styled(Card)`
    margin-top: 5rem;
    padding: 1rem;
    text-align: center;
    h3 {
        margin-top: 2rem;
    }
    p {
        margin-top: 0.5rem;
    }
    &:hover a {
        background-color: ${props => props.theme.colors.gray_500};
    }
    @media ${props => props.theme.media.tablet} {
        width: 90%;
        margin-inline: auto;
    }
`

const SocialsContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    a {
        font-size: 0.7rem;
        background-color: ${props => props.theme.colors.gray_600};
        padding: 0.8rem;
        border-radius: 0.7rem;
        transition: ${props => props.theme.transition};
    }
` 

function Trainer({ image, name, job, socials }) {
    return ( 
        <TrainerCard>
            <Container
            borderRadius='0 2rem'
            overflow='hidden'
            >
                <img src={image} alt={name} />
            </Container>
            <h3>{name}</h3>
            <p>{job}</p>
            <SocialsContainer>
                {
                    socials.map(({icon, link}, index) => {
                        return <a key={link + index} 
                        href={link} 
                        target='_blank'
                        rel='noreffer noopener'
                        >
                            {icon}
                        </a>
                    })
                }
            </SocialsContainer>
        </TrainerCard>
    );
}

export default Trainer;