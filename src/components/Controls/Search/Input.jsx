import styled from "styled-components";

export const Input = styled.input.attrs({
    type: 'search',
    playceholder: 'Search for a country...'
})`
    margin-left: 32px;
    border: none;
    outline: none;
    background-color: var(--colors-ui-base);
    color: var(--color-text);
`;