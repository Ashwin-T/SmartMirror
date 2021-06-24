
import React from 'react';
import DateAndTimeMain from '../Clock/dateAndTimeMain.js';
import Greeting from '../Greeting/greeting.js'
import Logo from './logo';
const MainPageOne = ()=> {
    
    return(
        <div>
            <DateAndTimeMain/>
            <Logo stylz = 'logo2'/>
            <Greeting/>

        </div>
    ); 
}

export default MainPageOne;