import React from "react";
import "../../App.css";
import background from '../../images/HomeImage.png'


function Home() {

  
  return (
    <div>
    
    <div className="home-content" style={{backgroundImage: `url(${background})`, width:'100%' , backgroundPosition: 'center', backgroundRepeat: "no-repeat", backgroundSize:'cover'}}>
      <h1>Welcome to Pavilion Effect</h1>
      <h2>Changes start today</h2>
      <div className="link">
      <a href="/signup" style={{color:"white"}}><label for="view" className="button-register">Register Now</label></a>
      </div>
      <p/>
    </div>
 </div>

  );
}

export default Home;
