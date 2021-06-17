import {useState, useEffect} from 'react';
import axios from 'axios'; 



const temp = async () =>{
    const path = 'https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=88d2efcaea28f04722ae5374cd196f84';

    const d = await axios.get(path);
    console.log(d.main);
    return (75);
};

const ShowTemp = () => {
    
    const [temperature, setTemperature] = useState(null);

    useEffect(() => {
        (async()=>{
            setTemperature(await temp());
        })();

    }, []);
    
    
    
    return(<div className = "temp">{temperature}</div>);
}

export default ShowTemp;