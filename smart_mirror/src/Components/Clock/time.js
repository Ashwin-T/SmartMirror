import React, {useState,useEffect} from 'react'; 
import moment from 'moment';

const Time = () => {

    const [currentTime, setcurrentTime] = useState();
    
    const interval = setInterval(()=> setcurrentTime(moment().format('LTS'),1000));

    useEffect(()=>{return ()=>{clearInterval(interval);}},[]); 
    
    return (
        <div className = 'time'>{currentTime}</div>
      );
}
 
export default Time;