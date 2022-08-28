import React from 'react';
import styled, { css } from 'styled-components';

const CardArticle = styled.article`
    position: ${({position}) => position ? position : 'initial'};
    margin-top: ${({marginTop}) => marginTop ? marginTop : 'initial'};
    gap: ${({gap}) => gap ? gap : 'initial'};   
    background-color: ${props => props.theme.colors.gray_500};
    border: 2px solid transparent;
    text-align: ${({textAlign}) => textAlign ? textAlign : 'initial'};
    padding: ${({padding}) => padding ? padding : '3rem 2rem'};
    border-radius: 3rem 0 3rem;
    transition: ${props => props.theme.transition};
    &:hover {
        background: transparent;
        border-color: ${props => props.theme.colors.gray_400};
        cursor: default;
    }
    &:hover span {
        background-color: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.gray_600};
    }
    span {
        width: 3rem;
        height: 3rem;
        display: grid;
        place-items: center;
        margin-bottom: 1.5rem;
        margin-inline: auto;
        border-radius: 1rem;
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.gray_100};
        font-size: 1.5rem;
        padding: 0.8rem;
        transition: ${props => props.theme.transition};
    }
    small {
        display: block;
        margin-top: 1rem;
        font-weight: 300;
    }
    a {
        display: flex;
        margin-top: 2.5rem;
        justify-content: center;
        align-items: center;
    }
    &:hover a {
        color: ${props => props.theme.colors.gray_100};
    }
    ${ props => props.mediaMd && css`
    @media ${props => props.theme.media.tablet} {
        ${props => props.mediaMd}
    }` 
  }
`

function Card(props) {
    return ( 
        <CardArticle className={props.className} {...props}>
            {props.children}
        </CardArticle>
    );
}

export default Card;