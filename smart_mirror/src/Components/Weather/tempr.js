import {useState, useEffect} from 'react';
import axios from 'axios'; 
const apiKeys = require('../../env.json');


const KtoF = k => {
    const f = Math.round((((k-273.15)*1.8)+32)); 
    return(f); 
}

const temp = async() =>{
    const {data: {main: {temp: temp}}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=${apiKeys.weatherApi}`);
    console.log(temp);
    return (temp);

}

const ShowTemp = (props) => {
      
    const ApiCall = async() => setTemperature(await temp());

    const interval = setInterval(ApiCall,60000);

    const [temperature, setTemperature] = useState(null);

    useEffect(()=>{ApiCall(); return ()=>clearInterval(interval);},[]); 


    
    return(<div className = "temp">{temperature} ° F</div>);
}

export default ShowTemp;