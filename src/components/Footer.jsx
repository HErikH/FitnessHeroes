import React from 'react';
import { Container, StyledLink } from '../ReusableStyledComponents/StyledComponents';
import Logo from '../images/logo.png';
import { FaLinkedin, FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import styled from 'styled-components';

const FooterArticle = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.7rem;
    p {
        margin-top: 0.5rem;
    }
    h4 {
        font-size: 1rem;
        margin-bottom: 0.6rem;
    }
    @media ${props => props.theme.media.tablet} {
       align-items: center;
       p {
        text-align: center;
       }
    }
`

const FooterSocials = styled(Container)`
    a {
        background-color: ${props => props.theme.colors.gray_100};
        padding: 0.7rem;
        border: 1px solid transparent;
        border-radius: 0.6rem;
        transition: ${props => props.theme.transition};
        svg {
        color: ${props => props.theme.colors.gray_600};
        }
        &:hover {
            border-color: ${props => props.theme.colors.gray_100};
            background: transparent;
        }
    }

`

function Footer() {
    return ( 
        <Container 
        as='footer'
        display='block'
        marginTop='7rem'
        padding='7rem 5rem'
        paddingTop='7rem'
        fontSize='0.9rem'
        backgroundColor='theme.colors.primary'
        color='theme.colors.gray_100'
        mediaMd='margin-top: 7rem;'
        >
            <Container
            display='grid'
            gridTemplateColumns='26rem 1fr 1fr 1fr'
            gap='6rem'
            mediaLg='grid-template-columns: 1fr 1fr; gap: 4rem;'
            mediaMd='grid-template-columns: 1fr; gap: 3rem;'
            >
                <FooterArticle as='article'>
                    <StyledLink to='/' width='7rem' display='block'>
                        <img src={Logo} alt="Footer Logo" />
                    </StyledLink>
                    <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Natus laboriosam consequatur magni corrupti adipisci! 
                    Hic illo rem ducimus obcaecati iusto?
                    </p>
                    <FooterSocials 
                    display='flex'
                    marginTop='1.5rem'
                    gap='1rem'
                    alignItems='center'
                    >
                        <a href="https://www.linkedin.com/" target='_blank' rel='noreferrer noopener'>
                            <FaLinkedin />
                        </a>
                        <a href="https://www.facebook.com/" target='_blank' rel='noreferrer noopener'>
                            <FaFacebookF />
                        </a>
                        <a href="https://www.twitter.com/" target='_blank' rel='noreferrer noopener'>
                            <AiOutlineTwitter />
                        </a>
                        <a href="https://www.instagram.com/" target='_blank' rel='noreferrer noopener'>
                            <AiFillInstagram />
                        </a>
                    </FooterSocials>
                </FooterArticle>

                <FooterArticle as='article'>
                     <h4>Permalinks</h4>
                     <StyledLink to='/about'>About</StyledLink>
                     <StyledLink to='/plans'>Plans</StyledLink>
                     <StyledLink to='/trainers'>Trainers</StyledLink>
                     <StyledLink to='/gallery'>Gallery</StyledLink>
                     <StyledLink to='/contact'>Contact</StyledLink>
                </FooterArticle>

                <FooterArticle as='article'>
                    <h4>Insights</h4>
                    <StyledLink to="/s">Blog</StyledLink>
                    <StyledLink to="/s">Case Studies</StyledLink>
                    <StyledLink to="/s">Events</StyledLink>
                    <StyledLink to="/s">Communities</StyledLink>
                    <StyledLink to="/s">FAQs</StyledLink>
                </FooterArticle>

                <FooterArticle as='article'>
                    <h4>Get In Touch</h4>
                    <StyledLink to="/contact">Contact Us</StyledLink>
                    <StyledLink to="/s">Support</StyledLink>
                </FooterArticle>

            </Container>

            <Container
            display='flex'
            fontSize='1.5rem'
            color='theme.colors.gray_100'
            justifyContent='center'
            textAlign='center'
            padding='1.5rem 0'
            borderTop='2px solid hsl(210, 100%, 50%)'
            marginTop='7rem'
            >
                <small>2022 &copy; All Rights Reserved.</small>
            </Container>
        </Container> 
    );
}

export default Footer;