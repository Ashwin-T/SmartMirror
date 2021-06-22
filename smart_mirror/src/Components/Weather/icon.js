const ShowIcon = ({path: {data : {weather: [{icon: i}]}}}) => (<img src = {`https://openweathermap.org/img/wn/${i}@2x.png`} className = "icon"></img>)

export default ShowIcon;