import React from 'react';

function Nav() {
    return(
        <header>
              <h2>
    <a href="/">
      <span role="img" aria-label="hype"> 😤</span> Matty P!
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
      <a href ="https://docs.google.com/document/d/1pKvIJPIs8aSIZeBWmVjn1MwToAjzk_iU/edit?usp=sharing&ouid=106472186831044685502&rtpof=true&sd=true"> Resume </a>
      </li>
    </ul>
  </nav>
        </header>
    );
}
export default Nav;