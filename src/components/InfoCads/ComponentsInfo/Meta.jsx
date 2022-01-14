import styled from "styled-components";

export const Meta = styled.div`
    margin-top: 48px;
    display: flex;
    gap: 24px;
    flex-direction: column;
    align-items:flex-start;

    @media(min-width: 767px) {
    flex-direction: row;
    align-items: center;
    } 
`;