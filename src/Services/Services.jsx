import axios from "axios";
import { useState, useEffect } from "react";

const Services = () => {
    const [countries, setCountries] = useState([]);
    console.log(countries);
    useEffect(() => {
        axios.get(ALL_COUNTRIES).then(
            ({data}) => setCountries(data)
        )
    }, []);

    return (

    )
}

export default Services;