import React, { ReactElement } from 'react';
import './App.scss';
import SocialBar from 'components/SocialBar';
import backgroundH from '../assets/background.jpg';
import backgroundV from '../assets/background-v.jpg';

function App(): ReactElement {
  return (
    <div className="App">
      <img className="only-desktop" src={backgroundH} alt="" />
      <img className="only-mobile" src={backgroundV} alt="" />
      <SocialBar />
    </div>
  );
}

export default App;
