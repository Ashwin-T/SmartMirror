import React from 'react';

import DateAndTimeMain from '../Clock/dateAndTimeMain.js';
import WeatherMain from '../Weather/weatherMain.js';
// import Logo from './logo';


const MainPage = ()=> {
    
    return(
        <div>
            <DateAndTimeMain/>
            <WeatherMain/> 
            {/* <Logo/> */}
        </div>
    ); 
}

export default MainPage;