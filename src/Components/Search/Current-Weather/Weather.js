import "./Weather.css";

const Weather = (props) => {
    const data = props.data;

    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data && data.city}</p>
                    <p className="weather-description">{data && data.weather[0].description}</p>
                </div>
                <img
                    alt="weather"
                    className="weather-icon"
                    src={data && data.weather[0] ? `/icons/${data.weather[0].icon}.png` : '/icons/unknown.png'}
                />
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(data && data.main.temp)}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">{Math.round(data && data.main.feels_like)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">{Math.round(data && data.wind.speed)}</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{data && data.main.humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">{data && data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Weather; 