import {useState, useEffect} from 'react';
import axios from 'axios'; 

const apiKeys = require('../../env.json');


const MoreWeatherHum = async () =>{
    const {data: {main: {humidity: hum}}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=${apiKeys.weatherApi}`);
    return (hum);
}


const ShowMoreWeatherHum = () => {

    const [more, setMore] = useState(null);

    const ApiCall = async() => setMore(await MoreWeatherHum());
    const interval = setInterval(ApiCall,60000);

    useEffect(()=>{
        ApiCall();    
        return ()=>clearInterval(interval);
    },[]); 
   
    return(<div className = "iconData humidity">humidity: {more}%</div>);
}

export default ShowMoreWeatherHum;