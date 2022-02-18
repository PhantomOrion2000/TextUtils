// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  // const [textColor, setTextColor] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      // setTextColor('light'); 
      document.body.style.backgroundColor = 'rgb(7 14 24)';
      showAlert("Dark mode has been enabled","success");
    } else {
      setMode('light');
      // setTextColor('dark');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
  }

  return (
    <>
    <Router>
      <Navbar title= "TextUtils"  mode={mode} /**textColor={textColor} */ toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <Switch>
        {/* /users --> Component 1
        /users/home --> Component 2 */}
          <Route exact path="/about" >
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextForm heading="Try TextUtils - Word Counter, Charecter Counter, Remove Extra Spaces" mode={mode} showAlert={showAlert}/> 
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}
 
export default App;
