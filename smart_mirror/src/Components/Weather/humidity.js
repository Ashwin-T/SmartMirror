import {useState, useEffect} from 'react';
import axios from 'axios'; 

const apiKeys = require('../../env.json');

const MoreWeatherHum = async () =>{
    const path = `https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=${apiKeys.weatherApi}`;

    const d = await axios.get(path);
    return (d.data.main.humidity);
    //`${d.weather.icon}`
}

const ShowMoreWeatherHum = () => {
    
    const ApiCall = async() => setMore(await MoreWeatherHum());

    const interval = setInterval(ApiCall,60000);

    const [more, setMore] = useState(null);

    useEffect(()=>{ApiCall(); return ()=>clearInterval(interval);},[]); 
    
   
    return(<div className = "iconData humidity">humidity: {more}%</div>);
}

export default ShowMoreWeatherHum;