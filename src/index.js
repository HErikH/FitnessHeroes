import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import image from './images/bg_texture.png';
import './index.scss';
import App from './App';

const theme = {
    colors: {
        primary: "hsl(210, 100%, 50%)",
        primary_variant: "hsl(210, 100%, 65%)",
        gray_100: "hsl(240, 47%, 94%)",
        gray_200: "hsl(240, 26%, 75%)",
        gray_300: "hsl(240, 24%, 64%)",
        gray_400: "hsl(240, 16%, 41%)",
        gray_500: "hsl(240, 44%, 25%)",
        gray_600: "hsl(240, 48%, 15%)",
        secondary: '#ffb116',  
    },
    transition: 'all 500ms ease',   
    media: {
        large: 'only screen and (max-width: 1024px)',
        tablet: 'only screen and (max-width: 600px)',
        phone: 'only screen and (max-width: 425px)',
    }
}

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
}

body {
    background: ${theme.colors.gray_600} url(${image});
    color: ${theme.colors.gray_200};
    line-height: 1.7;
    overflow-x: hidden;
}

h1, h2, h3, h4, h5 {
    line-height: 1.2;
    color: ${theme.colors.gray_100};
}

h1 {
    font-size: 3rem;
}

h2 {
    font-size: 2rem;
}

a {
    color: ${theme.colors.gray_100};
}

img {
    width: 100%;
    display: block;
    object-fit: cover;
}

.btn {
    width: fit-content;
    color: ${theme.colors.gray_100};
    margin: 0 auto;
    padding: 0.9rem 2rem;
    background-color: ${theme.colors.primary};
    border-radius: 1.5rem;
    transition: ${theme.transition};
    cursor: pointer;
    &:hover {
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.gray_600};
    }
    &.lg {
        font-size: 1.1rem;
        border-radius: 2rem;
        padding: 1.2rem 3rem;
    }
    &.sm {
        font-size: 0.9rem;
        padding: 0.4rem 1.2rem;
        &:hover {
            background-color: ${theme.colors.gray_100};
        }
    }
}

section {
    margin-top: 10rem;
} 

.header {
    margin-top: 5rem;
    height:20rem;
    overflow: hidden;
    border-bottom: 2px solid ${theme.colors.gray_400};
}

@media ${theme.media.large} {
    h1 {
        font-size: 2rem;
    }
    h2 {
        font-size: 1.6rem;
    }
}

@media ${theme.media.tablet} {
    h1 {
        font-size: 2.2rem;
        line-height: 1.3;
    }
    section {
        margin-top: 7rem;
    }
    .header {
        height: fit-content;
    }
}
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App/>
    </ThemeProvider>
    </BrowserRouter>
);

