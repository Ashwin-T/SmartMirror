const ShowMoreWeather = ({path: {data : {weather: [{description: des}]}}}) => (<div className = "iconData description">{des}</div>)

export default ShowMoreWeather;