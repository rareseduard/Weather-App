import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { url, geoApiOptions } from '../../API';


const Search = ({ onSearchChange }) => {

    const [ search, setSearch ] = useState(null);

    const loadOptions = async (inputValue) => {
        try {
            const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${inputValue}`;
            const response = await fetch(url, geoApiOptions);
            const result = await response.json();
            return {
                options: result.data.map((city) => ({
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name}, ${city.countryCode}`
                }))
            };
        } catch (error) {
            console.error(error);
            return { options: [] }; 
        }
        
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }


    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    );
}

export default Search;