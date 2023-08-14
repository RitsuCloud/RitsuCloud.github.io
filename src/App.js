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
      <Contact/>
    </div>
  );
}

function Summary(){
  return(
    <div className='summary-container hidden'>
      <div className='sunmmary'>This is the summary of myself, testing how the website update works</div>
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
    <div className='contact-container' id="contact-id">
      <div>Contact Me👇🏻</div>
      <p>
        Gmail: chonhinchou@gmail.com <br></br>
        Phone Number: (206)489-6409
      </p>
    </div>
  )
}


