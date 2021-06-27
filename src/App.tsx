import React from 'react';

/* Styles */
import './App.scss';

/* Components */
import Navbar from './components/Navbar';
import Herobox from './components/Herobox';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Herobox />
      </div>
    </>
  );
};

export default App;
