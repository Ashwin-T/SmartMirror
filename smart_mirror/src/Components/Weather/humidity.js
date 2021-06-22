const ShowMoreWeatherHum = ({path: {data: {main: {humidity: hum}}}}) => {return(<div className = "iconData humidity">humidity: {hum}%</div>);}

export default ShowMoreWeatherHum;