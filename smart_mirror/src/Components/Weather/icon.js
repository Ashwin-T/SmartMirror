import axios from 'axios'; 

const path = 'https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=88d2efcaea28f04722ae5374cd196f84';


const Icon = async () =>{
    const d = await axios.get(path);
    return (<div/>);
} 

export default Icon;