import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import FooterLogo from './assets/alligator.png';
import Help from './assets/help_text.png'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.hoverMouse = null;
    this.state = {
    };
  }
  componentDidMount(){
    this.hoverMouse = document.addEventListener("mousemove", getMouse);
    var bee = document.getElementById("bee");
    var mouse = {x:0, y:0}; //mouse.x, mouse.y
    bee.style.position = "absolute";
    bee.style.zIndex="9000"; //css		
    var beepos = {x:0, y:0};
    setInterval(followMouse, 50);
		var dir = "right";
    function getMouse(e){
        mouse.x = e.pageX;
        mouse.y = e.pageY;
    //Checking directional change
    if(mouse.x > beepos.x){
      dir = "right";
    } else {
      dir = "left";
    }
    }
    function followMouse(){
			//1. find distance X , distance Y
			var distX = mouse.x - beepos.x;
			var distY = mouse.y - beepos.y;
			//Easing motion
       //Progressive reduction of distance 
			beepos.x += distX/5;
			beepos.y += distY/2;
			
			bee.style.left = beepos.x + "px";
			bee.style.top = beepos.y + "px";
      
      
        //Apply css class 
        if (dir === "right"){
          bee.setAttribute("class", "right");
        } else {
          bee.setAttribute("class", "left");        
        }
		} 
  }

render() {
  return (
    <div className="App">
      <Header />
      <main>
      <div id="bee"> 
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/160783/astroboy.png"  alt="Astroboy Mouse Icon"/>
</div>
        <iframe title="Graphic" src="./paper/examples/Paperjs.org/NyanRainbow.html" width="1920" height="1080" frameBorder="0"></iframe>
      </main>
      <footer className="footer-content">
        <section>
          <img src={FooterLogo} alt="Stand Up Seoul Company Logo" width="531" height="380" className="footer-logo"/>
        </section>
        <section className="contact-form">
          <img src={Help} alt="Contact Welcome Text - How can we help?" width="309" height="55"/>
          <form className="email-form">
            <label for="fName" />
            <input type="text" id="fName" name="fName" placeholder="Full Name"/><br/>
            <label for="email" />
            <input type="email" id="email" name="email" placeholder="Email address"/><br/>
            <label for="message" />
            <textarea name="message" id="message" placeholder="What's on your mind?"/><br/>
            <input type="submit" value="Submit" />
          </form>
          <small>Stand Up Seoul &copy; 2021 All rights reserved.</small>
        </section>
      </footer>
    </div>
  );
}
}

