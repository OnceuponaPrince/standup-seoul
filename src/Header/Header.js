import React from "react";
import Colorlogo from '../assets/SUSOfficial.png';
import Whitelogo from '../assets/header_logo_w.png';
import './header.css'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.hoverMouse = null;
    this.listener = null;
    this.state = {
      status: "top",
      isOpen: false
    };
  }

  componentDidMount() {
    this.listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 1) {
        if (this.state.status !== "amir") {
          this.setState({ status: "amir" });
        }
      } else {
        if (this.state.status !== "top") {
          this.setState({ status: "top" });
        }
      }
    });
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  handleClick = () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".main-nav");
    console.log("Abc");
    this.setState({
      isOpen: !this.state.isOpen
    });
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active")
  }

  render() {
    return (
        <div>
            <header className="App-header"
        style={{
            backgroundColor: "#000",
            color: "white",
            position: "fixed",
            transition: "all 0.1s linear"
          }}>
              <div className="hamburger" onClick={this.handleClick}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
              <nav className="main-nav">
            <ul>
            <li>ABOUT (COMING SOON)</li>
            <li>SHOWS (COMING SOON)</li>
            <li>SHOP (COMING SOON)</li>
          </ul>
        </nav>
        <a href="/" className="main-logo">
          <img src= {this.state.status === "top" ? Colorlogo : Whitelogo} alt="Stand Up Seoul Company Logo" width="364"height="35" />
          </a>
      </header>
        </div>
    );
  }
}