import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    position: ${({position}) => position ? position : 'initial'};
    width: ${({width}) => width ? width : 'auto'};
    height: ${({height}) => height ? height : 'auto'};
    font-size: ${({fontSize}) => fontSize ? fontSize : 'initial'};
    color: ${({color, theme}) => color ? eval(color) : ''};
    text-align: ${({textAlign}) => textAlign ? textAlign : 'initial'};
    background-color: ${({backgroundColor, theme}) => backgroundColor ? eval(backgroundColor) : ''};
    display: ${({display}) => display ? display : 'block'};
    flex-direction: ${({flexDirection}) => flexDirection ? flexDirection : 'initial'};
    justify-content: ${({justifyContent}) => justifyContent ? justifyContent : 'initial'};
    align-items: ${({alignItems}) => alignItems ? alignItems : 'initial'};
    grid-template-columns: ${({gridTemplateColumns}) => gridTemplateColumns ? gridTemplateColumns : 'initial'};
    gap: ${({gap}) => gap ? gap : 'initial'};
    place-items: ${({placeItems}) => placeItems ? placeItems : 'initial'};
    max-width: ${({maxWidth}) => maxWidth ? maxWidth : 'initial'};
    margin-inline: ${({marginInline}) => marginInline ? marginInline : 'initial'};
    margin: ${({margin}) => margin ? margin : 'initial'};
    margin-top: ${({marginTop}) => marginTop ? marginTop : 'initial'};
    padding: ${({padding}) => padding ? padding: 'initial'};
    padding-top: ${({paddingTop}) => paddingTop ? paddingTop : 'initial'};
    border: ${({border}) => border ? border : 'initial'};
    border-top: ${({borderTop, theme}) => borderTop ? borderTop : 'initial'};
    border-radius: ${({borderRadius}) => borderRadius ? borderRadius : 'initial'};
    top: ${({top}) => top ? top : 'initial'};
    left: ${({left}) => left ? left : 'initial'};
    overflow: ${({overflow}) => overflow ? overflow : 'initial'};
    box-shadow: ${({boxShadow}) => boxShadow ? boxShadow : 'initial'};
    transform: ${({transform}) => transform ? transform : 'initial'};
    transition: ${({transition, theme}) => transition ? eval(transition) : 'initial'};

    ${ ({hover}) => hover && css`
    &:hover {
      ${({hover}) => hover}
    }`
  }

    ${ props => props.mediaLg && css`
    @media ${props => props.theme.media.large} {
        ${props => props.mediaLg}
    }` 
  }

    ${ props => props.mediaMd && css`
    @media ${props => props.theme.media.tablet} {
        ${props => props.mediaMd}
    }` 
  }
`

export const Header = styled.header`
    width: ${({width}) => width ? width : 'auto'};
    height: ${({height}) => height ? height : 'auto'};
    display: ${({display}) => display ? display : 'initial'};
    justify-content: ${({justifyContent}) => justifyContent ? justifyContent : 'initial'};
    align-items: ${({alignItems}) => alignItems ? alignItems : 'initial'};
    place-items: ${({placeItems}) => placeItems ? placeItems : 'initial'};
    margin-top: ${({marginTop}) => marginTop ? marginTop : 'initial'};
    margin-bottom: ${({marginBottom}) => marginBottom ? marginBottom : 'initial'};
    gap: ${({gap}) => gap ? gap : 'initial'};
    ${ props => props.mediaLg && css`
    @media ${props => props.theme.media.large} {
        ${props => props.mediaLg}
    }` 
  }
    ${ props => props.mediaMd && css`
    @media ${props => props.theme.media.tablet} {
        ${props => props.mediaMd}
    }` 
  }
`

export const StyledLink = styled(Link)`
    display: ${({display}) => display ? display : 'initial'};
    position: ${({position}) => position ? position : 'initial'};
    width: ${({width}) => width ? width : 'auto'};
    height: ${({height}) => height ? height : 'auto'};
    display: ${({display}) => display ? display : 'initial'};
    margin-top: ${({marginTop}) => marginTop ? marginTop : 'initial'};
    margin-bottom: ${({marginBottom}) => marginBottom ? marginBottom : 'initial'};
    justify-content: ${({justifyContent}) => justifyContent ? justifyContent : 'initial'};
    align-items: ${({alignItems}) => alignItems ? alignItems : 'initial'};
`

export const Section = styled.section`
    width: ${({width}) => width ? width : 'auto'};
    margin-top: ${({marginTop}) => marginTop ? marginTop : 'initial'};
    margin-inline: ${({marginInline}) => marginInline ? marginInline : 'initial'};
    padding: ${({padding}) => padding ? padding : 'initial'};
    ${ props => props.mediaLg && css`
    @media ${props => props.theme.media.large} {
        ${props => props.mediaLg}
    }` 
  }
    ${ props => props.mediaMd && css`
    @media ${props => props.theme.media.tablet} {
        ${props => props.mediaMd}
    }` 
  }
`

export const Side =styled.div`
    display: ${({display}) => display ? display : 'initial'};
    position: ${({position}) => position ? position : 'initial'};
    place-items: ${({placeItems}) => placeItems ? placeItems : 'initial'};
    margin-top: ${({marginTop}) => marginTop ? marginTop : 'initial'};
`