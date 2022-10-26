import React from 'react';
import card from "../../assets/small/pics/card.png"
import employee from "../../assets/small/pics/employeetrack.png"
import password from "../../assets/small/pics/password.png"
import smorgasbord from "../../assets/small/pics/smorgasbord.png"
import weather from "../../assets/small/pics/weather.png"
import workschedule from "../../assets/small/pics/workschedule.png"
function Gallery() {
    return (
      <section>
        <h1 id="Gallery">Some of my Interests</h1>
        <p>Currently I've been studying to be a web developer, but in my free time I really enjoy chess, basketball, and training my cat!</p>
      </section>,
      <section>
  <div>Pick A Card
  <li>
  <a href= "https://lillielovatt.github.io/eat-your-luck/" > <img src={card}  className="my-2" style={{ width: "55%" }} onClick="https://lillielovatt.github.io/eat-your-luck/" /> </a>
  </li>
</div>
  <div> Employee Tracker
  <li>
  <a href= "https://github.com/potworam/employee-tracker" > <img src={employee}  className="my-2" style={{ width: "55%" }} onClick="https://github.com/potworam/employee-tracker" /> </a>
  </li>
</div>
  <div> Password Generator
  <li>
  <a href= "https://potworam.github.io/password-generator2/" > <img src={password}  className="my-2" style={{ width: "55%" }} onClick="https://potworam.github.io/password-generator2/" /> </a>
  </li>
</div>
  <div> Smorgasbord
  <li>
  <a href= "https://github.com/LDagnese/smorgasbord" > <img src={smorgasbord}  className="my-2" style={{ width: "55%" }} onClick="https://github.com/LDagnese/smorgasbord" /> </a>
  </li>
</div>
  <div> Weather App
  <li>
  <a href= "https://potworam.github.io/weather/" > <img src={weather}  className="my-2" style={{ width: "55%" }} onClick="https://potworam.github.io/weather/" /> </a>
  </li>
</div>
  <div> Work Scheduler
  <li>
  <a href= "https://potworam.github.io/calendar-app/" > <img src={workschedule}  className="my-2" style={{ width: "55%" }} onClick="https://potworam.github.io/calendar-app/" /> </a>
  </li>
</div>
</section>
    );
  }
  export default Gallery;