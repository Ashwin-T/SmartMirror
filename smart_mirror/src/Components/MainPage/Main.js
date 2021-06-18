import React from 'react';
import Date from '../Clock/date.js';
import Time from '../Clock/time.js';
import Location from '../Clock/location';
import ShowTemp from '../Weather/tempr.js';
import ShowIcon from '../Weather/icon.js';
import ShowMoreWeather from '../Weather/moreWeather';
import ShowMoreWeatherHum from '../Weather/humidity';
import ShowMoreWeatherWind from '../Weather/wind';


const MainPage = ()=> {
    
    return(
        <div>
            <Date/>
            <Time/>
            <Location/>
            <ShowTemp/>
            <ShowIcon/>
            <ShowMoreWeather/>
            <ShowMoreWeatherHum/>
            <ShowMoreWeatherWind/>
        </div>
    ); 
}

export default MainPage;