import React, {useState,useEffect} from 'react'; 
import moment from 'moment';
const Date = ()=>{

    // creates a state storing the current time string
    const [currentDate, setcurrentDate] = useState(moment().format('dddd') +' '+ moment().format('LL')); 

    const interval = setInterval(()=> setcurrentDate(moment().format('dddd') +' '+ moment().format('LL')), 10000);

    useEffect(()=>{
        // returning a function in the useEffect acts as a cleanup function for the component. 
        //If the component were to unmount (be removed from the screen) it will run this function
        return ()=>{
            clearInterval(interval); // this stops the inteval function above from being run
        }
    },[]); 

    return (<div className = 'date'>{currentDate}</div>); // displays the current time and is updated everytime currentTime is updated
};

export default Date; 