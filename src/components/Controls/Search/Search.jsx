
import {IoSearchCircleOutline} from 'react-icons/io5';

import { InputContainer } from './InputContainer';
import { Input } from './Input';

const Search = ({search, setSearch}) => {

    return (
        <InputContainer>
            <IoSearchCircleOutline/>
            <Input onChange= {e => setSearch(e.target.value)} value={search}/>
        </InputContainer>
    )
}

export default Search;