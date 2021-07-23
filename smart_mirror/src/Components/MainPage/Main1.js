
import React from 'react';
import DateAndTimeMain from '../Clock/dateAndTimeMain.js';
import Greeting from '../Greeting/greeting.js'
import Logo from './logo';
import TodoList from '../TodoList/Todo'

const MainPageOne = ()=> {

    return(
        <>
            <div className = 'flex wrap1'>
                <Logo stylz = 'logo2'/>
            </div>

            <div className = 'flex'>
                <DateAndTimeMain/>
            </div>

            <Greeting/>

            <div className = 'flex'>
                <TodoList/>
            </div>
        </>
    ); 
}

export default MainPageOne;