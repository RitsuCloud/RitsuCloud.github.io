import './style/App.css';
import Chon from "./imgs/chon.jpg";
import {useEffect} from "react";
import Navbar from "./NavBar.js";

export default function App() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting){
          entry.target.classList.add('show');
        }
      });
    });
  
    const hiddenElements = document.querySelectorAll(".hidden", ".last-hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  });
  
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <Intro/>
      <Summary/>
      <div className='project-word'> Projects:</div>
      <Project/>
      <Contact/>
    </div>
  );
}

function Project(){
  return (
    <div className='projects-container'>
      <div className='project-title-description'>Left side</div>
      <div className='project-images'>Right side</div>
    </div>
  );
}

function Summary(){
  return(
    <div className='summary-container hidden'>
      <div className='summary'>I am a junior at the University of Washington Seattle, majoring in computer science. 
      I enjoy solving challenging problems, meeting new people, and learning from them since I don't have much experience outside of school.
      I have much to learn and am eager to do so. Nice to meet you!😁</div>
    </div>
  );
}

function Intro(){
  return(
    <div className='main-body-container' id="main-id">
      <div className='hidden'>Welcome!⬇️😊</div>
      <div className='hidden'>To My Portfolio</div>
      <div className='hidden'>
        <div>I am Chon😄</div>
        <img class="chon" src={Chon} alt="Chon"></img>
      </div>
    </div>
  );
}

function Contact(){
  return(
    <div className='contact-container hidden' id="contact-id">
      <div>Contact Me👇🏻</div>
      <p>
        Gmail: chonhinchou@gmail.com <br></br>
        Phone Number: (206)489-6409
      </p>
    </div>
  )
}


