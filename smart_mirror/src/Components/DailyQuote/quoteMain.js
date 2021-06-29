import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'; 


const QuoteMain = () => {
    const getQuote = async() =>{
        const {data} = await axios.get('http://10.0.0.22:8080/quote'); //fix this later
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
    
    
    return (
        <>
            <div className = 'quote'>
                "{dailyQuote.q}"
                <div className = 'quoteAuthor'>
                    - {dailyQuote.a}
                </div>
            </div>

            
        </>
    );
}
 
export default QuoteMain;