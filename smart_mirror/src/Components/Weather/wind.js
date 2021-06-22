// const MoreWeatherWind = async () =>{
//     const {data: {wind: {speed: sp}}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=${apiKeys.weatherApi}`);
//     return (sp);
// }

const ShowMoreWeatherWind = ({path: {data: {wind: {speed: sp}}}}) => (<div className = "iconData per">wind speed: {sp} m/s</div>)

export default ShowMoreWeatherWind;