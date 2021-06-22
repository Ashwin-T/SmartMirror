import {useState, useEffect} from 'react';
import axios from 'axios'; 

const apiKeys = require('../../env.json');


// const MoreWeatherHum = async () =>{
//     const {data: {main: {humidity: hum}}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=${apiKeys.weatherApi}`);
//     return (hum);
// }


const ShowMoreWeatherHum = ({path: {data: {main: {humidity: hum}}}}) => {
   
    return(<div className = "iconData humidity">humidity: {hum}%</div>);
}

export default ShowMoreWeatherHum;