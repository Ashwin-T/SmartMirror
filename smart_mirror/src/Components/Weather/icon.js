const ShowIcon = ({path: {data : {weather: [{icon: i}]}}}) => {
    
    const imgsrc = `https://openweathermap.org/img/wn/${i}@2x.png`
    return(<img src = {imgsrc} className = "icon"></img>);
}

export default ShowIcon;