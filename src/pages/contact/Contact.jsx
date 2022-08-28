import React from 'react';
import HeaderComponent from '../../components/Header';
import headerImage from '../../images/header_bg_2.jpg';
import { MdEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import { Section, Container } from '../../ReusableStyledComponents/StyledComponents';
import styled from 'styled-components';
 
const Wrapper = styled(Container)`
    display: flex;
    width: fit-content;
    gap: 2rem;
    @media ${props => props.theme.media.tablet} {
        gap: 1.5rem;
    }
    a {
        font-size: 2rem;
        background-color: ${props => props.theme.colors.primary};
        border: 2px solid transparent;
        margin-top: 6rem;
        padding: 2rem;
        border-radius: 0.5rem;
        transition: ${props => props.theme.transition};
        &:hover {
            background-color: transparent;
            border-color: ${props => props.theme.colors.gray_100};
            margin-top: 7rem;
        }
        &:nth-child(1):hover {
            color: #FBBC04;
        }
        &:nth-child(2):hover {
            color: #3b5998;
        }
        &:nth-child(3):hover {
            color: #49C358;
        }
        @media ${props => props.theme.media.tablet} {
            padding: 1.3rem;  
            font-size: 2rem;   
            border-radius: 1rem;
        }
    }
` 

function Contact() {
    return ( 
        <>
        <HeaderComponent 
        title='Get In Touch'
        image={headerImage}
        >
            Fruga itaque ducimus, ad amet praesentium suscipit sit, 
            assumenda nihil officia totam, animi culpa
            nobis nemo natus doloremque?
        </HeaderComponent>
        <Section>
            <Container display='grid' placeItems='center'>
                <Wrapper>
                    <a href="mailto:erikharutyunyan398@gmail.com" 
                    target='_blank' rel='noreferrer noopener'>
                        <MdEmail />
                    </a>
                    <a href="http://m.me/Erik Harutyunyan" 
                    target='_blank' rel='noreferrer noopener'>
                        <BsMessenger />
                    </a>
                    <a href="http://wa.me/+37455091859" 
                    target='_blank' rel='noreferrer noopener'>
                        <IoLogoWhatsapp />
                    </a>
                </Wrapper>
            </Container>
        </Section>
        </>
     );
}

export default Contact;