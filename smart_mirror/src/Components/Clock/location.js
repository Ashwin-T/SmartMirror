import React, {useState,useEffect} from 'react'; 
const Location = ()=>{

    const [location, setLocation] = useState('Seattle, Washington'); 


    return (<div className = 'location'>{location}</div>); 
}
export default Location; 