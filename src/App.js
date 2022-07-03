import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Container from './Shared/Container/header'
import AboutUs from './Components/pages/About/AboutUs'
import FAQspage from './Components/pages/FAQspage/FAQs';
import TnC from './Components/pages/TermsandCondPage/TnC';
import Homepage from './Components/pages/Homepage/home'
import ApplyNow from './Components/pages/Applynow/applynow';
import Ambassadors from './Components/pages/Ambassadorpage/Ambassadors';
import Modal from './ModalpopUP/modal';
import ApplynowModal from './context/ApplynowModal'
import AmbassadorModal from './ModalpopUP/AmbassadorModal'

function App() {

  const [showApplynowModal, setshowApplynowModal] = useState(false)

  return (
    <BrowserRouter>
      <ApplynowModal.Provider value={{ showApplynowModal, setshowApplynowModal }}>
        <Routes>
          <Route path="*" element={<Homepage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ApplyNow" element={<ApplyNow />} />
          <Route path="/FAQspage" element={<FAQspage />} />
          <Route path="/TnC" element={<TnC />} />
          <Route path="/Ambassadors" element={<Ambassadors />} />
          <Route path="/Modal" element={<Modal />} />
          <Route path="/AmbassadorModal" element={<AmbassadorModal/>} />
        </Routes>
      </ApplynowModal.Provider>
    </BrowserRouter>

  );
}

export default App;
