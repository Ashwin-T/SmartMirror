import {useState, useEffect} from 'react';
import axios from 'axios'; 

const apiKeys = require('../../env.json');

// const MoreWeather = async () =>{
//     const {data : {weather: [{description: des}]}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=${apiKeys.weatherApi}`);
//     return (des);
// }

const ShowMoreWeather = ({path: {data : {weather: [{description: des}]}}}) => {
    
    return(<div className = "iconData description">{des}</div>);
}

export default ShowMoreWeather;