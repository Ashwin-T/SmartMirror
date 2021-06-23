import React, {useState,useEffect} from 'react'; 
import moment from 'moment';

const Time = ({stylz}) => {

    const [currentTime, setcurrentTime] = useState();
    
    const interval = setInterval(()=> setcurrentTime(moment().format('LTS'),1000));

    useEffect(()=>(()=>{clearInterval(interval)}),[]); 

    return (
        <div className = {stylz}>{currentTime}</div>
      );
}
 
export default Time;