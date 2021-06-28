import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import MainPageOne from './Components/MainPage/Main1';
import HomePage from './Components/MainPage/homePage';
import MainPageTwo from './Components/MainPage/Main2';
import firebase from './firebase.js';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  )
}

const App = ()=>{
  
    let history = useHistory();
    const db = firebase.firestore(); 
    const [data, setData] = useState(0);
    
    useEffect(
      ()=>{
        db.collection('Page').doc('PageNum')
        .onSnapshot((doc) => {
          history.push(`/${doc.data().Page}`);
                    //   history.go(0);

          setData(doc.data().Page);
      });
      }, [data])
    

  return (
    <div className="App">
      <Router history = {history}>
        <Switch>

          <Route path = '/0'> 
            <HomePage/>
          </Route>

          <Route path = '/1'> 
            <MainPageOne/>
          </Route>

          <Route path = '/2'> 
            <MainPageTwo/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default AppWrapper;
