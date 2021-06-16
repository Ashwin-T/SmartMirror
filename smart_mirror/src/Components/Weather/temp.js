import axios from 'axios'; 

const path = 'https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=88d2efcaea28f04722ae5374cd196f84';

export const temp = async () =>{
    const d = await axios.get(path.temp());
    return d.temp();
}; 