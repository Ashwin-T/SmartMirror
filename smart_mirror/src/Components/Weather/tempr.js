import {useState, useEffect} from 'react';
import axios from 'axios'; 

const apiKeys = require('../../env.json');

const temp = async () =>{
    const path = `https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=${apiKeys.weatherApi}`;

    const d = await axios.get(path);
    return (d.data.main.temp);

}

const ShowTemp = () => {
    
    const KtoF = (k) => {
        const f = Math.round((((k-273.15)*1.8)+32));

        return(f);
    }

    const ApiCall = async() =>{
        setTemperature(KtoF(await temp()));
    }

    const interval = setInterval(ApiCall,1800000);

    const [temperature, setTemperature] = useState(null);

    useEffect(()=>{
        ApiCall();
        return ()=>{
            clearInterval(interval); 
        }
    },[]); 
    
    console.log(temperature);
    
    return(<div className = "temp">{temperature}</div>);
}

export default ShowTemp;