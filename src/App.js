import './App.css';
import {NavBar} from './NavBar';
import React from 'react';
import {Footer} from './Footer';
import {About} from './About';
import  {Start} from './Start';
import {Buchen} from './Buchen';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='content'>
      <Start />
      <About />
      <Buchen />

      </div>
      <Footer />
    </div>
  );
}

export default App;
