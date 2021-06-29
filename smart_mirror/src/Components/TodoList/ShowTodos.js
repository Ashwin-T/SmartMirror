import { useEffect, useState } from "react";
import firebase from "../../firebase";
const db = firebase.firestore();

const ShowToDo = () => {
  
    const [item, setItem] = useState([]);

    useEffect(() => {

    db.collection("Todo").onSnapshot((querySnapshot) => {setItem(querySnapshot.docs.map((ques) => (
      <li key = {ques.id} className = 'todoText'>
          {ques.data().message}
      </li>
    )))})}, []);

    useEffect(()=>console.log(item),[item]);


  return (
    <div>
      <ul>
       {item}
      </ul>
    </div>
  );
};

export default ShowToDo;
