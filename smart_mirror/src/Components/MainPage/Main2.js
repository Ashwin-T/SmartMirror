import React from 'react';
import DateAndTimeMain from '../Clock/dateAndTimeMain.js';
import WeatherMain from '../Weather/weatherMain.js';
import QuoteMain from '../DailyQuote/quoteMain.js';
import Logo from './logo';



const MainPageTwo = ()=> {

    
    return(
        <div>
            <DateAndTimeMain/>
            <WeatherMain/> 
            <QuoteMain/>
            <Logo stylz = 'logo'/>
        </div>
    ); 
}

export default MainPageTwo;