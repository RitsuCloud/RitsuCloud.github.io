import './style/App.css';
import Chon from "./imgs/chon.jpg";
import {useEffect} from "react";
import Navbar from "./NavBar.js";
import castle1 from "./imgs/castle/ScreenShot00001.png"


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
      <Castle/>
      <DiscordBot/>
      <Contact/>
    </div>
  );
}

function Castle(){
  return (
    <div className='projects-container' id="project-id">
      <div>
        <div className='project-title hidden'>
          Castle Scenery with Unreal Engine 5
        </div>
        <img class="castle-image hidden" src={castle1} alt="Castle"></img>
        <div className='project-description hidden'>
          Technology used: UE5 Blueprint - Quixel Bridge - Megascans<br></br>
          <br></br>
          Castle scenery uses Meagscans Quixel Bridge to find 8k meshes to add to my scenery, then with the help of
          the new nanite rendering technology to reduce the impact on performance from the meshes. You can find more screenshots
          of my castle scenery with the link to my GitHub repo below.👇🏻
          <br></br>
          <br></br>
          <a href="https://github.com/RitsuCloud/casteEnv">👉🏻 Castle Scenery Repo</a>
        </div>
      </div>
    </div>
  );
}

function DiscordBot(){
  return(
    <div className='projects-container'>
      <div className='project-title hidden'>Discord Bot</div>
      <div className='bot-img-container'>
        <div >LEFT</div>
        <div >MID</div>
        <div >RIGHT</div>
      </div>
      <div className='bot-description hidden'>
        Description of the discord bot
      </div>
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
    <div className='contact-container' id="contact-id">
      <div>Contact Me👇🏻</div>
      <p>
        Gmail: chonhinchou@gmail.com <br></br>
        Phone Number: (206)489-6409
      </p>
    </div>
  )
}


