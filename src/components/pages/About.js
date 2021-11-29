import React from "react";
import Navbar from "../Navbar/Navbar";
import "../App.css";


function About() {

  return (
    <div>
      <Navbar/>
    <div className='about-body'>
    <div class="about-section" style={{ backgroundSize: "55%", backgroundRepeat: "no-repeat", backgroundColor:'#f1f1f1', overflow:"hidden", padding:"100px 0"}}>
        <div class="inner-container">
            <h1>About Us</h1>
            <p class="text2">
            We are GenZ development, a team of developers and tech enthusiasts, and future start-up.
            We have something that unites us all. It is our love for technology. We are not just a team, we are a family.</p>
          <h2>About project</h2>
          <p class="text2"> The main vision or the key value of our application is the user's ability to set and track their own goals that need to be performed in a defined time frame.By whit they will have better time management and insight about on what they spend the most time. Also it provides different types of books for improvement and gif workouts for activity and small laugh.</p>
          <h2>Main mission</h2>
          <p class="text2">More efficient and faster self-improvement in the form of reducing anxiety and increasing productivity during a pandemic or post-pandemic.</p>
            <div class="contact">
                <a href='https://dev-genzdevelopment.pantheonsite.io/'>Web Page</a>
                <a href="https://instagram.com/genz_development?utm_medium=copy_link">Instagram</a>
                <a href="mailto:genztechies@gmail.com">Email</a>
            </div>
        </div>
    </div>
      </div>
      </div>
  );
}

export default About;