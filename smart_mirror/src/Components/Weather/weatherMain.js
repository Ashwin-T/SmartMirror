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

    const [path, setPath] =  useState({data: {weather: [{icon: '01d'}], main: {temp: 310, humidity: 69}, wind: {speed: 6.429}}}); //dummy values

    const ApiCall = async() =>setPath(await getAxios());
        
    const interval = setInterval(ApiCall,600000);//

    useEffect(()=>{
        ApiCall(); 
        return ()=>clearInterval(interval);
    },[]); 
    

    return (
        <div className="flex" style  = {{width: '1000px'}}>
            <ShowIcon path = {path}/>
            <div style = {{paddingTop: '75px', marginLeft: '0px'}}>
                <ShowTemp path = {path}/>
                <ShowMoreWeather path = {path}/>
                <ShowMoreWeatherHum path = {path}/>
                <ShowMoreWeatherWind path = {path}/>
            </div>
        </div>
      );
}
 
export default WeatherMain;