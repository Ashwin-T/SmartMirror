import Date from '../Clock/date.js';
import Time from '../Clock/time.js';
import Location from '../Clock/location';
import Logo from './logo.js'
import { useState } from 'react';
import { useHistory } from "react-router-dom";



const HomePage = () => {

    return (  
        <>
            <div className = 'flex wrap1'>
                <Date stylz = 'dateHome'/>
            </div>
            <div className = 'flex wrap2'>
                <Logo stylz = 'logoHome'/>
            </div>
            <div className = 'flex'>
                <Time stylz = 'timeHome'/>
                <Location stylz = 'locationHome'/>
            </div>
            
        </>
    );
}
 
export default HomePage;