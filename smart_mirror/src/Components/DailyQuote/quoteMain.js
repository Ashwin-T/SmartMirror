import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'; 


const QuoteMain = () => {
    const getQuote = async() =>{
        const {data} = await axios.get('http://localhost:8080/quote');
        return(data);
    }
    const apiCall = async()=> setdailyQuote(await getQuote());

    const [dailyQuote, setdailyQuote] = useState({q: "Kick butt", a: "Ashwin T"}); 

    const interval = setInterval(apiCall, 10800000);

    useEffect(()=>{
        // returning a function in the useEffect acts as a cleanup function for the component. 
        //If the component were to unmount (be removed from the screen) it will run this function
        apiCall();
        return ()=>{
            clearInterval(interval); // this stops the inteval function above from being run
        }
    },[]);
    
    
    return (<><div className = 'quote'>"{dailyQuote.q}"</div><div className = 'quoteAuthor'>- {dailyQuote.a}</div></>);
}
 
export default QuoteMain;