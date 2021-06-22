const KtoF = k => {
    const f = Math.round((((k-273.15)*1.8)+32)); 
    return(f); 
}

const ShowTemp = ({path: {data: {main: {temp: t}}}}) => {
      
    return(<div className = "temp">{KtoF(t)} ° F</div>);
    }

export default ShowTemp;