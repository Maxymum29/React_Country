import styled from "styled-components";

export const ListGroup = styled.div`
    display: flex;
    flex-direction: column;

    gap: 32px;

    @media(min-width: 1024px) {
    flex-direction: row;
    gap: 64px;

}
`;