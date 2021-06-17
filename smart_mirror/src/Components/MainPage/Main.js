import React from 'react';
import Date from '../Clock/date.js';
import Time from '../Clock/time.js';
import Location from '../Clock/location';
import ShowTemp from '../Weather/tempr.js';

const MainPage = ()=> {
    
    return(
        <div>
            <Date/>
            <Time/>
            <Location/>
            <ShowTemp/>

        </div>
    ); 
}

export default MainPage;