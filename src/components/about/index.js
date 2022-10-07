import React from 'react';
import coverImage from "../../assets/cover/pic.jpg";
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Its me Matty P!</h1>
      <img src={coverImage}  className="my-2" style={{ width: "55%" }} alt="cover" 
      />
    </section>
  );
}

export default About;