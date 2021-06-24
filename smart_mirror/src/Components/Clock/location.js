import React, {useState} from 'react'; 
const Location = ({stylz})=>{

    const [location, setLocation] = useState('Seattle, Washington'); 

    return (<div className = {stylz}>{location}</div>); 
}
export default Location; 