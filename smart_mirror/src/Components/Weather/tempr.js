import {useState, useEffect} from 'react';
import axios from 'axios'; 

const temp = async () =>{
    const path = 'https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=88d2efcaea28f04722ae5374cd196f84';

    const d = await axios.get(path);
    console.log(d.main);

    return (300);
};

const ShowTemp = () => {
    
    const KtoF = (k) => {
        const f = (((k-273.15)*1.8)+32);
        
        return(f);
    }


    const [temperature, setTemperature] = useState(null);

    useEffect(() => {
        (async()=>{
            setTemperature(KtoF(await temp()));
        })();

    }, []);
    
    
    
    return(<div className = "temp">{temperature}</div>);
}

export default ShowTemp;