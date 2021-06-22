const KtoF = k => {return(Math.round((((k-273.15)*1.8)+32)));}

const ShowTemp = ({path: {data: {main: {temp: t}}}}) => {return(<div className = "temp">{KtoF(t)} ° F</div>);}

export default ShowTemp;