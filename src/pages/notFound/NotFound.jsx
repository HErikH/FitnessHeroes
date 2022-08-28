import React from 'react';
import { Container, Section, StyledLink } from '../../ReusableStyledComponents/StyledComponents'

function NotFound() {
    return ( 
        <Section>
            <Container textAlign='center' paddingTop='8rem'>
                <h2>Page Not Found</h2>
                <StyledLink 
                to='/' 
                className='btn' 
                marginTop='2rem !important'
                display='inline-block !important'
                >
                    Go Back Home</StyledLink>
            </Container>
        </Section>    
    );
}

export default NotFound;