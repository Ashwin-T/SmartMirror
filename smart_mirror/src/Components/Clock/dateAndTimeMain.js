import Date from './date.js';
import Time from './time.js';
import Location from './location';

const DateAndTimeMain = () => {
    return (  
        <div className = 'flex column'>  
            <Date stylz = 'date'/>
            <div className = 'flex pad'>
                <Time stylz = 'time'/>
                <Location stylz = 'location'/>
            </div>
        </div>
    );
}
 
export default DateAndTimeMain;