import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import styled from 'styled-components';

const FAQArticle = styled.article`
    background-color: ${props => props.theme.colors.gray_500};
    padding: 2rem;
    border-radius: 1rem;
    cursor: pointer;
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    button {
        font-size: 1.5rem;
        color: ${props => props.theme.colors.gray_100};
        background: transparent;
    }
    p {
        margin-top: 1.5rem;
    }
`

function FAQ({ question, answer }) {
    const [isAnswerShowing, setIsAnswersShowing] = useState(false);

    return ( 
        <FAQArticle onClick={() => setIsAnswersShowing(prev => !prev)}>
            <div>
                <h4>{question}</h4>
                <button>
                    {
                        isAnswerShowing ?
                        <AiOutlineMinus /> :
                        <AiOutlinePlus />
                    }
                </button>
            </div>
            {isAnswerShowing && <p>{answer}</p>}
        </FAQArticle>
    );
}

export default FAQ;