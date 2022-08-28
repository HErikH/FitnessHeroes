import React from 'react';
import HeaderComponent from '../../components/Header';
import HeaderImage from '../../images/header_bg_5.jpg';
import { trainers } from '../../data';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { Container, Section } from '../../ReusableStyledComponents/StyledComponents';
import Trainer from '../../components/Trainer';

function Trainers() {
    return ( 
        <>
        <HeaderComponent title='Our Trainers' image={HeaderImage}>
        Facilis, iusto numquam unde laboriosam expedita qui exercitationem? Dicta vero
        accusantium est aut molestiae fugit doloremque suscipit quod.
        </HeaderComponent>

        <Section marginTop='5rem' padding='0 5rem'>
            <Container 
            display='grid'
            gridTemplateColumns='repeat(3, 1fr)'
            gap='4rem'
            mediaLg='grid-template-columns: 1fr 1fr; gap: 2.5rem;'
            mediaMd='grid-template-columns: 1fr; gap: 2rem;'
            >
                {
                    trainers.map(({ id, image, name, job, socials }) => {
                        return <Trainer key={id} image={image} name={name} job={job} socials={ 
                        [
                            {icon: <BsInstagram />, link: socials[0],},
                            {icon: <AiOutlineTwitter />, link: socials[1],},
                            {icon: <FaFacebookF />, link: socials[2],},
                            {icon: <FaLinkedinIn />, link: socials[3],}
                        ]
                        }/>
                    })
                }
            </Container>
        </Section>
        </>
    );
}

export default Trainers;