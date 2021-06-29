import React from 'react';
import DateAndTimeMain from '../Clock/dateAndTimeMain.js';
import WeatherMain from '../Weather/weatherMain.js';
import QuoteMain from '../DailyQuote/quoteMain.js';
import Logo from './logo';



const MainPageTwo = ()=> {

    
    return(
        <>  
            <div className = 'flex wrap1'>
                <Logo stylz = 'logo'/>
            </div>  

            <div className = 'flex'>
                <DateAndTimeMain/>
            </div>
            
            
            <div className = 'flex wrap3'>
                <WeatherMain/> 
                <QuoteMain/>
            </div>
        </>
    ); 
}

export default MainPageTwo;