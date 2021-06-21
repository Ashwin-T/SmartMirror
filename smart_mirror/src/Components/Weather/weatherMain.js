import ShowTemp from './tempr.js';
import ShowIcon from './icon.js';
import ShowMoreWeather from './moreWeather';
import ShowMoreWeatherHum from './humidity';
import ShowMoreWeatherWind from './wind';


import axios from 'axios'; 
import {useState, useEffect} from 'react';


const WeatherMain = () => {
    // const apiKeys = require('../../env.json');

    // const getAxios = async() =>{
    //     return(git stash pop`));
    // }

    // const [p, setP] =  useState({});

    // const ApiCall = async() =>setP(await getAxios);
        
    // const interval = setInterval(ApiCall,10000);

    // useEffect(()=>{
    //     ApiCall(); 
    //     return ()=>clearInterval(interval);
    // },[]); 
    

    return (
        <div>
            <ShowTemp/>
            <ShowIcon/>
            <ShowMoreWeather/>
            <ShowMoreWeatherHum/>
            <ShowMoreWeatherWind/>
        </div>
      );
}
 
export default WeatherMain;