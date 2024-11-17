import logo from './logo.svg';
import './App.css';
import First from './Components/First';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
//import { getData } from './Components/Api';
import { useSelector,useDispatch } from 'react-redux';
import Helo from './Components/Helo';
import Header from './Components/Header';
import Category from './Components/Category';
import Mainpage from './Components/Mainpage';
//import { getData } from './Redux/Reducer';
//import { submit } from './Redux/Reducer';
function App() {
  return( 
  <div className='App'>
    <Header/>
   <Category/>
   <Mainpage/>
  </div>
  )
}

export default App;
