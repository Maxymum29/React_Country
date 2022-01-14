import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ALL_COUNTRIES } from '../config';
import Controls from '../components/Controls/Controls';
import List from '../components/List';
import Card from '../components/Card';

const HomePage = ({countries, setCountries}) => {
    const [filtredCountries, setFiltredCountries] = useState(countries);

    let navigate = useNavigate();

    const handleSearch = (search, region) => {
        let data = [...countries];

        if(region) {
            data = data.filter(el => el.region.includes(region));
        }

        if (search) {
            data = data.filter(el => el.name.toLowerCase().includes(search.toLowerCase()));
        }

        setFiltredCountries(data);
    }

    useEffect(() => {
        if(!countries.length) axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    }, []);

    useEffect(() => {
        handleSearch();
        //eslint-disable-next-line
    }, [countries]);

    return (
        <>
             <Controls onSearch={handleSearch}/>
                <List>
                    {filtredCountries.map((item) => {
                        const countrieInfo = {
                            img: item.flags.svg,
                            name: item.name,
                            info: [
                                {
                                    title: 'Population',
                                    description:
                                        item.population.toLocaleString(),
                                },
                                { title: 'Region', description: item.region },
                                { title: 'Capital', description: item.capital },
                            ],
                        };
                        return <Card onClick={() => navigate(`/country/${item.name}`)} key={item.name} {...countrieInfo} />;
                    })}
                </List>
        </>
    )
}

export default HomePage;