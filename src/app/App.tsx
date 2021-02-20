import React, { ReactElement } from 'react';
import './App.scss';
import backgroundH from '../assets/background.png';
import backgroundV from '../assets/background-v.png';

function App(): ReactElement {
  return (
    <div className="App">
      <img className="only-desktop" src={backgroundH} alt="" />
      <img className="only-mobile" src={backgroundV} alt="" />
    </div>
  );
}

export default App;
