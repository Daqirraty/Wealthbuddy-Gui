import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from './Shared/Container/header'
import AboutUs from './Components/pages/About/AboutUs'
import FAQspage from './Components/pages/FAQspage/FAQs';
import TnC from './Components/pages/TnCpage/TnC';
import Homepage from './Components/pages/Homepage/home'
import ApplyNow from './Components/pages/Applynow/Applynow';
import Ambassadors from './Components/pages/Ambassadorpage/Ambassadors';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ApplyNow" element={<ApplyNow />} />
          <Route path="/FAQspage" element={<FAQspage />} />
          <Route path="/TnC" element={<TnC />} />
          <Route path="/Ambassadors" element={<Ambassadors />} />
      </Routes>
    </BrowserRouter>
        
  );
}

export default App;
