import React, {useState,useEffect} from 'react'; 
import moment from 'moment';
const Date = ({stylz})=>{

    // creates a state storing the current time string
    const [currentDate, setcurrentDate] = useState(moment().format('dddd') +' '+ moment().format('LL')); 

    const interval = setInterval(()=> setcurrentDate(moment().format('dddd') +' '+ moment().format('LL')), 10000);

    useEffect(()=>{return ()=>{clearInterval(interval);}},[]); 

    return (<div className = {stylz}>{currentDate}</div>); // displays the current time and is updated everytime currentTime is updated
};

export default Date; 