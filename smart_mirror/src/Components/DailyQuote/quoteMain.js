import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'; 


const QuoteMain = () => {
    const getAxios = async() =>{
        return(axios.get('https://zenquotes.io/api/today'));
    }

    const [dailyQuote, setdailyQuote] = useState('You change the world by being yourself'); 

    const interval = setInterval(()=> setdailyQuote('You change the world by being yourself'));

    useEffect(()=>{
        // returning a function in the useEffect acts as a cleanup function for the component. 
        //If the component were to unmount (be removed from the screen) it will run this function
        return ()=>{
            clearInterval(interval); // this stops the inteval function above from being run
        }
    },[]); 
    
    
    return (<div className = 'quote'>{dailyQuote}</div>);
}
 
export default QuoteMain;