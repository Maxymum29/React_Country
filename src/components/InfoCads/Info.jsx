import axios from "axios";
import { useState, useEffect } from "react";

import { filterByCode } from "../../config";

import { ImgInfo } from "./ComponentsInfo/ImgInfo";
import { WrapperInfo } from "./ComponentsInfo/WrapperInfo";
import { TitleInfo } from "./ComponentsInfo/TitleInfo";
import { ListGroup } from "./ComponentsInfo/ListGroup";
import { List } from "./ComponentsInfo/List";
import { ListItem } from "./ComponentsInfo/ListItem";
import { TagGroup } from "./ComponentsInfo/TagGroup";
import { Tag } from "./ComponentsInfo/Tag";
import { Meta } from "./ComponentsInfo/Meta";

const Info = (props) => {
    const {
        name,
        nativeName,
        flag,
        capital,
        population,
        region,
        subregion,
        topLevelDomain,
        currencies= [],
        languages= [],
        borders= [],
        navigation
    } = props;

    const [neighbour, setNeighbour] = useState([]);

    useEffect (() => {
        axios.get(filterByCode(borders)).then(
            ({data}) => setNeighbour(data.map(c => c.name))
        )
    }, [borders])

    return (
        <WrapperInfo>
            <ImgInfo src={flag} alt={name}/>
            <div>
                <TitleInfo>{name}</TitleInfo>
                <ListGroup>
                    <List>
                        <ListItem><b>Native Name:</b> {nativeName}</ListItem>
                        <ListItem><b>Population:</b> {population}</ListItem>
                        <ListItem><b>Region:</b> {region}</ListItem>
                        <ListItem><b>Sub Region:</b> {subregion}</ListItem>
                        <ListItem><b>Capital:</b> {capital}</ListItem>

                    </List>
                    <List>
                        <ListItem>
                        <b>Capital:</b> {topLevelDomain.map(d => (<span key={d}>{d}</span>))}
                        </ListItem>
                        <ListItem>
                        <b>Currencies:</b> {currencies.map(c => (<span key={c.code}>{c.name} </span>))}
                        </ListItem>
                        <ListItem>
                        <b>Languages:</b> {languages.map(l => (<span key={l.name}>{l.name}</span>))}
                        </ListItem>
                    </List>
                </ListGroup>
                <Meta>
                    <b>Border Countries</b>
                    {!borders.length ? (
                        <span>There is no border countries</span>
                    ) : (
                        <TagGroup>
                            {neighbour.map(b => (<Tag onClick={() => navigation(`/country/${b}`)} key={b}>{b}</Tag>))}
                        </TagGroup>
                    )}
                </Meta>
            </div>
        </WrapperInfo>
    )
}

export default Info;