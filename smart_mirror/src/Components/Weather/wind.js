import {useState, useEffect} from 'react';
import axios from 'axios'; 

const apiKeys = require('../../env.json');

const MoreWeatherWind = async () =>{
    const {data: {wind: {speed: sp}}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=${apiKeys.weatherApi}`);
    return (sp);
}

const ShowMoreWeatherWind = () => {
    
    const ApiCall = async() =>setMore(await MoreWeatherWind());

    const interval = setInterval(ApiCall,10000);

    const [more, setMore] = useState(null);

    useEffect(()=>{ApiCall(); return ()=>clearInterval(interval);},[]); 
   
    return(<div className = "iconData per">wind speed: {more} m/s</div>);
}

export default ShowMoreWeatherWind;