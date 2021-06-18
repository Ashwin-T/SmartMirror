import React, {useState,useEffect} from 'react'; 
import moment from 'moment';

const Time = () => {

    const [currentTime, setcurrentTime] = useState();
    
    const interval = setInterval(()=> setcurrentTime(moment().format('LTS'),1000));

    useEffect(()=>{
        // returning a function in the useEffect acts as a cleanup function for the component. 
        //If the component were to unmount (be removed from the screen) it will run this function
        return ()=>{
            clearInterval(interval); // this stops the inteval function above from being run
        }
    },[]); 
    
    return (
        <div className = 'time'>{currentTime}</div>
      );
}
 
export default Time;