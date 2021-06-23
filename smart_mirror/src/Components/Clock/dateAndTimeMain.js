import Date from './date.js';
import Time from './time.js';
import Location from './location';

const DateAndTimeMain = () => {
    return (  
        <div>
            <Date stylz = 'date'/>
            <Time stylz = 'time'/>
            <Location stylz = 'location'/>
        </div>
    );
}
 
export default DateAndTimeMain;