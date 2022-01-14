import { useState, useEffect } from "react";

import Search from "./Search/Search";
import { CustomSelect } from "./CustomSelect/CustomSelect";
import { Wrapper } from "./Wrapper/Wrapper";

const Controls = ({onSearch}) => {

    const options = [
        {value: 'Africa', label: 'Africa'},
        {value: 'America', label: 'America'},
        {value: 'Asia', label: 'Asia'},
        {value: 'Europe', label: 'Europe'},
        {value: 'Oceania', label: 'Oceania'},
    ];

    const [search, setSearch] = useState('');
    const [region, setRegion] = useState('');

    useEffect(() => {
        const regionValue = region?.value || '';
        onSearch(search, regionValue);
        
        //eslint-disable-next-line
    }, [search, region])

    return (
        <div>
            <Wrapper>
                <Search search={search} setSearch={setSearch}/>
                <CustomSelect
                    options={options}
                    placeholder = 'Filter by Region'
                    isClearable
                    isSearchable={false}
                    value={region}
                    onChange={setRegion}
                />
            </Wrapper>
        </div>
    )
}

export default Controls;