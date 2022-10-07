import React, {useState} from 'react';
import Nav from './components/Nav';
import About from './components/about';
import Gallery from "./components/Gallery";
import ContactForm from "./components/Contact";
import Footer from './components/footer';
import './App.css';
//testcomment//
function App() {
  return (
    <div>
         <Nav></Nav>
       <main>
       
        <Gallery></Gallery>
        <About></About>
        <ContactForm></ContactForm>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
