import React from "react";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './Header';
import Mainpage from './Mainpage';
function Routeslayot() {
  return (
    <>
      <Router>
     <Header/>
    <Routes>
    <Route path='/' element={<Mainpage/>}/>
    
    </Routes>
     </Router>
    </>
  )
}

export default Routeslayot
