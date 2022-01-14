import styled from "styled-components";

export const InputContainer = styled.label`
    background-color: var(--colors-ui-base);
    padding: 16px 32px;
    display: flex;
    align-items: center;

    border-radius: var(--radii);
    box-shadow: var(--shadow);
    width: 100%;
    margin-bottom: 24px;

    
    @media(min-width: 767px) {
        margin-bottom: 0;
        width: 280px;
    }
`;