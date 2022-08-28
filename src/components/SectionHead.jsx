import React from "react";
import styled from "styled-components";
import { Header } from "../ReusableStyledComponents/StyledComponents";
    
const SectionHeader = styled(Header)`
    span {
        font-size: 1.5rem;
        color: ${props => props.theme.colors.secondary};
        padding: 0.6rem 0.5rem 0.3rem 0.5rem;
        border-radius: 1rem;
        background-color: ${props => props.theme.colors.gray_500};
    }
`

function SectionHead({ icon, title, className }) {
  return (
    <SectionHeader
    display='flex'
    justifyContent='center'
    alignItems='center !important'
    gap='1rem'
    >
      <span>{icon}</span>
      <h2>{title}</h2>
    </SectionHeader>
  );
}

export default SectionHead;
