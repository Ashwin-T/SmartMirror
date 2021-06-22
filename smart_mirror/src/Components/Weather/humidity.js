const ShowMoreWeatherHum = ({path: {data: {main: {humidity: hum}}}}) => (<div className = "iconData humidity">humidity: {hum}%</div>)

export default ShowMoreWeatherHum;