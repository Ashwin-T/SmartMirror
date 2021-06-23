import Date from '../Clock/date.js';
import Time from '../Clock/time.js';
import Location from '../Clock/location';
import Logo from './logo.js'
import { useState } from 'react';



const HomePage = () => {
    
    return (  
        <div>
            <Date/>
            <Time/>
            <Location/>
            <Logo/>
        </div>
    );
}
 
export default HomePage;