import React from 'react';
import HeaderComponent from '../../components/Header';
import headerImage from '../../images/header_bg_3.jpg';
import { Section, Container } from '../../ReusableStyledComponents/StyledComponents';

function Gallery() {
    
    const galleryLength = 15;
    const images = [];

    for(let i = 1; i <= galleryLength; i++) {
        images.push(require(`../../images/gallery${i}.jpg`))
    }

    return ( 
        <>
            <HeaderComponent title='Our Gallery' image={headerImage}>
            Quisquam id tenetur adipisci nesciunt 
            ipsum amet in quibusdam, architecto nostrum nobis, est,
            deserunt odio illum perspiciatis.
            </HeaderComponent>
            <Section marginTop='5rem' padding='0 5rem'>
                <Container
                display='grid'
                gridTemplateColumns='repeat(3, 1fr)'
                mediaLg='grid-template-columns: 1fr 1fr; gap: 2rem;'
                mediaMd='grid-template-columns: 1fr; gap: 1rem;'
                >
                    {
                        images.map((image, index) => {
                            return (
                            <Container 
                            as='article' 
                            key={image + index}
                            border='1rem solid transparent'
                            transition='theme.transition'
                            hover='border: 1rem solid hsl(240, 44%, 25%);'
                            mediaLg='border: 0;'
                            >
                                <img src={image} alt={`Gallery Image ${index + 1}`} />
                            </Container>
                            )
                        })
                    }
                </Container>
            </Section>
        </>
    );
}

export default Gallery;