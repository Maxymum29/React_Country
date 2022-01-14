import styled from "styled-components";

const Wrapper = styled.article`
    border-radius: var(--radii);
    background-color: var(--colors-ui-base);
    box-shadow: var(--shadow);
    cursor: pointer;
    overflow: hidden;
`;

const CardImg = styled.img`
    display: block;
    width: 100%;
    height: 150px;
    object-fit: cover;
    object-position: center;
    box-shadow: var(--shadow);
`;

const CadrdBody = styled.div`
  padding: 16px 24px 28px;

`;

const CardTitle = styled.h3`
    margin: 0;
    font-size: var(--fs-md);
    font-weight: var(--fw-bold);
`;

const CardList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 16px 0 0;
`;

const CardListItem =styled.li`
    font-size: var(--fs-sm);
    line-height: 1.5;
    font-weight: var(--fw-light);

    & > b {
    font-weight: var(--fw-bold);
    }
`;


const Card = ({img, name, info = [], onClick}) => {
    return (
        <Wrapper onClick={onClick}>
            <CardImg src={img} alt={name}/>
            <CadrdBody>
                <CardTitle>{name}</CardTitle>
                <CardList>
                    {info.map(item => 
                        <CardListItem key={item.title}>
                            <b>{item.title}: {item.description}</b>
                        </CardListItem>    
                    )}
                </CardList>
            </CadrdBody>
        </Wrapper>
    )
};

export default Card;