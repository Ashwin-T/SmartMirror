import {useState, useEffect} from 'react';
import axios from 'axios'; 

const apiKeys = require('../../env.json');

const Icon = async () =>{
    const path = `https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=${apiKeys.weatherApi}`;

    const d = await axios.get(path);
    return (d.data.weather[0].icon);
    //`${d.weather.icon}`
}

const ShowIcon = () => {
    
    const ApiCall = async() =>{
        setIcon(await Icon());
    }

    const interval = setInterval(ApiCall,60000);

    const [icon, setIcon] = useState(null);

    useEffect(()=>{
        ApiCall();
        return ()=>{
            clearInterval(interval); 
        }
    },[]); 
    
    const imgsrc = `https://openweathermap.org/img/wn/${icon}@2x.png`
    return(<img src = {imgsrc} className = "icon"></img>);
}

export default ShowIcon;