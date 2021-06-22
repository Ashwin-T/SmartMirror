
// const Icon = async () =>{    
//     const {data : {weather: [{icon: i}]}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=${apiKeys.weatherApi}`);
//     return (i);


// `${d.weather.icon}`
// }

const ShowIcon = ({path: {data : {weather: [{icon: i}]}}}) => {
    
    const imgsrc = `https://openweathermap.org/img/wn/${i}@2x.png`
    return(<img src = {imgsrc} className = "icon"></img>);
}

export default ShowIcon;