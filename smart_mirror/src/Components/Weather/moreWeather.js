const ShowMoreWeather = ({path: {data : {weather: [{description: des}]}}}) => {return(<div className = "iconData description">{des}</div>);}

export default ShowMoreWeather;