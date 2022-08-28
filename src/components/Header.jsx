import React from 'react';
import { Header, Container } from '../ReusableStyledComponents/StyledComponents';

function HeaderComponent({ title, image, children }) {
    return ( 
        <Header className='header'>
            <Container
            position='relative'
            width='100%'
            height='300px'
            display='grid'
            placeItems='center'
            backgroundColor='"black"'
            >
                <Container
                position='absolute'
                width='100%'
                >
                    <img style={{opacity: 0.5, height: '300px',}} 
                    src={image} 
                    alt="Header Background Image" />
                </Container>

                <Container 
                position='relative'
                width='44%'
                margin='0 auto'
                textAlign='center'
                color='theme.colors.gray_100'
                mediaLg='width: 76%;'
                mediaMd='width: 80%; padding: 3rem 0;'
                >
                    <h2 style={{marginBottom: '1rem',}}>{title}</h2>
                    <p style={{color: 'rgba(255,255,255,0.75)',}}>
                        {children}
                    </p>
                </Container>
            </Container>
        </Header>
    );
}

export default HeaderComponent;