import {useState, useEffect} from 'react';
import axios from 'axios'; 

const apiKeys = require('../../env.json');

// const MoreWeatherWind = async () =>{
//     const {data: {wind: {speed: sp}}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=${apiKeys.weatherApi}`);
//     return (sp);
// }

const ShowMoreWeatherWind = ({path: {data: {wind: {speed: sp}}}}) => {
    

    return(<div className = "iconData per">wind speed: {sp} m/s</div>);
}

export default ShowMoreWeatherWind;