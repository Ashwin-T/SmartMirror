import React from 'react';

import DateAndTimeMain from '../Clock/dateAndTimeMain.js';
import WeatherMain from '../Weather/weatherMain.js';
import QuoteMain from '../DailyQuote/quoteMain.js';
// import Logo from './logo';


const MainPage = ()=> {
    
    return(
        <div>
            <DateAndTimeMain/>
            <WeatherMain/> 
            <QuoteMain/>
            {/* <Logo/> */}
        </div>
    ); 
}

export default MainPage;