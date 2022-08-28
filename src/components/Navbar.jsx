import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../data';
import { GoThreeBars } from 'react-icons/go';
import { MdOutlineClose } from 'react-icons/md';
import { Container, StyledLink } from '../ReusableStyledComponents/StyledComponents';
import logo from '../images/logo.png';
import styled from 'styled-components';

//Styles
const Nav = styled.nav`
    position: sticky;
    width: 100vw;
    height: 5rem;
    display: grid;
    place-items: center;
    background-color: ${props => props.theme.colors.primary};
    top: 0;
    left: 0;
    z-index: 99;
`

const NavLinks = styled.ul`
    display: flex;
    align-items: center;
    gap: 3.5rem;
    &:hover li {
        transition: all 0.2s linear;
        margin-top: -0.5rem;
    }
    li {
        transition: all 0.2s linear;
        &:nth-child(1) {
            transition-delay: 100ms;
        }
        &:nth-child(2) {
            transition-delay: 200ms;
        }
        &:nth-child(3) {
            transition-delay: 300ms;
        }
        &:nth-child(4) {
            transition-delay: 400ms;
        }
        &:nth-child(5) {
            transition-delay: 500ms;
        }
        &:nth-child(6) {
            transition-delay: 600ms;
        }
    }
    a {
        transition: ${props => props.theme.transition};
    }
    a:hover {
        color: ${props => props.theme.colors.secondary};
    }
    .active-nav {
        position: relative;
        &::after {
            content: '';
            position: absolute;
            display: block;
            width: 1.2rem;
            height: 1.2rem;
            background-color: ${props => props.theme.colors.primary};
            left: calc(50% - 0.6rem);
            transform: rotate(45deg);
            margin-top: 0.9rem;
        }
    }
    @media ${props => props.theme.media.large} {
        position: absolute;
        flex-direction: column;
        top: 100%;
        right: 0;
        gap: 0;
        perspective: 400px;
        .active-nav, .active-nav::after {
            display: none;
        }
        li {
            width: 100%;
            height: 4rem;
            box-shadow: -2rem 2rem 5rem rgba(0, 0, 0, 0.4);
            animation: navAnimation 600ms ease forwards;
            transform: rotateX(90deg);
            transform-origin: top;
            opacity: 0;
            &:nth-child(2) {
                animation-delay: 200ms;
            }
            &:nth-child(3) {
                animation-delay: 400ms;
            }
            &:nth-child(4) {
                animation-delay: 600ms;
            }
            &:nth-child(5) {
                animation-delay: 800ms;
            }
            a {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                padding: 1rem 5rem 1rem 3rem;
                background-color: ${props => props.theme.colors.primary};
            }
        }
        &.show_nav {
            display: flex;
        }
        &.hide_nav {
            display: none;
        }
        @keyframes navAnimation {
            to {
                transform: rotateX(0);
                opacity: 1;
            }
        }
    }
`


const Button = styled.button`
    display: ${({display}) => display ? display : 'initial'};
    @media ${props => props.theme.media.large} {
        display: inline-block;
        font-size: 1.8rem;
        background: transparent;
        cursor: pointer;
        svg {
            color: ${props => props.theme.colors.gray_100};
        }
    }
`
//
function Navbar() {
const [isNavShowing, setIsNavShowing] = useState(false); 

    return ( 
        <Nav>
            <Container 
            position="relative"
            maxWidth='1920px'
            width="80%"
            height="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginInline="auto"
            >
                <StyledLink 
                marginTop='2rem'
                width='7rem' 
                to="/" 
                onClick={() => setIsNavShowing(false)}
                > 
                    <img src={logo} alt="Nav Logo" />
                </StyledLink>
                <NavLinks className={`nav__links ${isNavShowing ? 
                'show_nav' : 
                'hide_nav'}`}>
                    {links.map(({name, path}) => {
                       return (
                        <li key={path}>
                            <NavLink className={({isActive}) => isActive ? 
                            'active-nav' : ''} 
                            to={path} 
                            onClick={() => setIsNavShowing(prev => !prev)}>
                                {name}
                            </NavLink>
                        </li>
                       )
                    })}
                </NavLinks>
                <Button
                onClick={() => setIsNavShowing(prev => !prev)}
                display="none"
                >
                    {
                        isNavShowing ? 
                        <MdOutlineClose /> :
                        <GoThreeBars />
                    }
                </Button>
            </Container>
        </Nav>
     );
}

export default Navbar;