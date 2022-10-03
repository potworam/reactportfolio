import React from 'react';

function Nav() {
    return(
        <header>
              <h2>
    <a href="/">
      <span role="img" aria-label="camera"> 📸</span> Oh Snap!
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About me
        </a>
      </li>
      <li className="mx-2">
        <a href="#contact"></a>
        <span>Contact</span>
      </li>
      <li className="mx-2">
        <a href="#portfolio"></a>
        <span>Portfolio</span>
      </li>
      <li className="mx-2">
        <a href="#resume"></a>
        <span>Resume</span>
      </li>
    </ul>
  </nav>
        </header>
    );
}
export default Nav;