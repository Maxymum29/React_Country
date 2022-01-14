import styled from "styled-components";

export const WrapperInfo = styled.section`
    margin-top: 48px;
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    gap: 32px;

    @media(min-width: 767px) {
        grid-template-columns: minmax(100px, 400px) 1fr;
        align-items: center;
        gap: 80px;
    }
    
    @media(min-width: 1024px) {
        grid-template-columns: minmax(400px, 600px) 1fr;
    }
`;