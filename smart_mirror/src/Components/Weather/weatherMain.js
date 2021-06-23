import ShowTemp from './tempr.js';
import ShowIcon from './icon.js';
import ShowMoreWeather from './moreWeather';
import ShowMoreWeatherHum from './humidity';
import ShowMoreWeatherWind from './wind';

import axios from 'axios'; 
import {useState, useEffect} from 'react';


const WeatherMain = () => {
    
    const apiKeys = require('../../env.json');  
    const getAxios = async() => (axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=${apiKeys.weatherApi}`))

    const [path, setPath] =  useState({data: {weather: [{icon: '10d'}], main: {temp: 69, humidity: 69}, wind: {speed: 69}}}); //dummy values

    const ApiCall = async() =>setPath(await getAxios());
        
    const interval = setInterval(ApiCall,7200000);

    useEffect(()=>{
        ApiCall(); 
        return ()=>clearInterval(interval);
    },[]); 
    

    return (
        <div>
            <ShowTemp path = {path}/>
            <ShowIcon path = {path}/>
            <ShowMoreWeather path = {path}/>
            <ShowMoreWeatherHum path = {path}/>
            <ShowMoreWeatherWind path = {path}/>
        </div>
      );
}
 
export default WeatherMain;