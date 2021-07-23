import React, {useState} from 'react'; 
const Location = ({stylz})=>{

    const [location, setLocation] = useState('Mounatin View, California'); 

    return (<div className = {stylz}>{location}</div>); 
}
export default Location; 