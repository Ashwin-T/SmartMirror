import Date from '../Clock/date.js';
import Time from '../Clock/time.js';
import Location from '../Clock/location';
import Logo from './logo.js'
import { useState } from 'react';
import { useHistory } from "react-router-dom";



const HomePage = () => {

    return (  
        <div>
            <Date stylz = 'dateHome'/>
            <Time stylz = 'timeHome'/>
            <Location stylz = 'locationHome'/>
            <Logo stylz = 'logoHome'/>
        </div>
    );
}
 
export default HomePage;