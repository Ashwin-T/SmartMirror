
import React from 'react';
import DateAndTimeMain from '../Clock/dateAndTimeMain.js';
import Greeting from '../Greeting/greeting.js'
import Logo from './logo';
// import Login from '../Spotify/Login.js';
import { useHistory } from "react-router-dom";


const MainPageOne = ()=> {


    return(
        <div>
            <DateAndTimeMain/>
            <Logo stylz = 'logo2'/>
            <Greeting/>
            {/* <Login/> */}
        </div>
    ); 
}

export default MainPageOne;