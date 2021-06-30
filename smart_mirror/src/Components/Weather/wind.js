const ShowMoreWeatherWind = ({path: {data: {wind: {speed: sp}}}}) => (<div className = "iconData per">wind speed: {sp} m/s</div>)

export default ShowMoreWeatherWind;