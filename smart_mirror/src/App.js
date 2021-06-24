
// see this is my home page and it goes to....
import './index.css';
import MainPageOne from './Components/MainPage/Main1';
import HomePage from './Components/MainPage/homePage';
import MainPageTwo from './Components/MainPage/Main2';

const App = ()=>{
  return (
    <div className="App">
        {/* <HomePage/> */}
        <MainPageOne/>
        {/* <MainPageTwo/> */}

    </div>
  );
}

export default App;
