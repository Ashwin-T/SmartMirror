import {useState, useEffect} from 'react';
import axios from 'axios'; 

const apiKeys = require('../../env.json');

const MoreWeather = async () =>{
    const path = `https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=${apiKeys.weatherApi}`;

    const d = await axios.get(path);
    return (d.data.weather[0].description);
    //`${d.weather.icon}`
}

const ShowMoreWeather = () => {
    
    const ApiCall = async() => setMore(await MoreWeather());

    const interval = setInterval(ApiCall,60000);

    const [more, setMore] = useState(null);

    useEffect(()=>{ApiCall(); return ()=>clearInterval(interval);},[]); 

   
    return(<div className = "iconData description">{more}</div>);
}

export default ShowMoreWeather;