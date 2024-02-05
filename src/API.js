
const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000`;
export const geoApiOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '650ddf8e9cmsh4bf16c006d6c3ebp1513a0jsn2dbc9199a662',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';
const WEATHER_API_KEY = '1827b7bdf67cd4a3d5d2dc3e743f26fe'


export { url };
export { WEATHER_API_URL };
export { WEATHER_API_KEY };