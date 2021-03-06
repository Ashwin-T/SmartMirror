import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import MainPageOne from './Components/MainPage/Main1';
import HomePage from './Components/MainPage/homePage';
import MainPageTwo from './Components/MainPage/Main2';
import firebase from './firebase.js';
import { useEffect } from 'react';
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
    
    useEffect(
      ()=>{
        let hasRun = false;
        db.collection('Page').doc('PageNum')
        .onSnapshot((doc) => {
          if (hasRun == true){
            history.push(`/${doc.data().Page}`);
            history.go(0);
          }
          hasRun = true;
      });
      }, [])
    

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
