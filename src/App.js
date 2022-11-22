import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Legos from './pages/legos/Legos';
import Register from './pages/register/Register';
import Contact from './pages/contact/Contact';
import AdminInterface from './pages/admin/Admin';

const setBackgroundForWebsite = () => {
  const element = document.getElementById('root');
  element.style.boxSizing = 'border-box';
  element.style.backgroundAttachment = 'fixed';
  element.style.backgroundPosition = '50% 50%';
  element.style.backgroundImage = "url('/img/lego_banner.jpeg')";
  element.style.opacity = '80%';
};

setBackgroundForWebsite();

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/legos' element={<Legos />} />
          <Route path='/register' element={<Register />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/admin' element={<AdminInterface />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
