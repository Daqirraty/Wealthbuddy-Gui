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
import ContextModal from './context/ContextModals';
import AmbassadorModal from './ModalpopUP/AmbassadorModal';

function App() {

  const [showApplynowModal, setshowApplynowModal] = useState(false)
  const [showContextAmbassadorModal, setshowContextAmbassadorModal] = useState(false)

  return (
    <BrowserRouter>
      <ContextModal.Provider value={{ showApplynowModal, setshowApplynowModal, showContextAmbassadorModal, setshowContextAmbassadorModal }}>
        <Routes>
          <Route path="*" element={<Homepage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ApplyNow" element={<ApplyNow />} />
          <Route path="/FAQspage" element={<FAQspage />} />
          <Route path="/TnC" element={<TnC />} />
          <Route path="/Ambassadors" element={<Ambassadors />} />
          <Route path="/Modal" element={<Modal />} />
          <Route path="/AmbassadorModal" element={<AmbassadorModal />} />
        </Routes>
      </ContextModal.Provider>
    </BrowserRouter>

  );
}

export default App;
