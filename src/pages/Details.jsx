import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

import {searchByCountrie} from '../config';
import { Button } from "../components/Button";
import Info from "../components/InfoCads/Info";

const Details = () => {
    const {name} = useParams();
    const navigation = useNavigate();
    const [country, setCountry] =useState(null);

    useEffect(() => {
        axios.get(searchByCountrie(name)).then(
            ({data}) => setCountry(data[0])
            )
    },[name]);


    return (
        <div>
            <Button onClick={() => navigation(-1)}><IoArrowBack/> Back</Button>
            {country && (
                <Info navigation={navigation} {...country}/>
            )}
        </div>
    )
}

export default Details;