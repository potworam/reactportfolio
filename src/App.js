import React, {useState} from 'react';
import Nav from './components/Nav';
import About from './components/about';
import Gallery from "./components/Gallery";
import './App.css';
//testcomment//
function App() {
  return (
    <div>
         <Nav></Nav>
       <main>
        <Gallery></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
