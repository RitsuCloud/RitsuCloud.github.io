import './style/App.css';
import Chon from "./imgs/chon.jpg";
import {useEffect} from "react";
import Navbar from "./NavBar.js";
import castle1 from "./imgs/castle/ScreenShot00001.png";
import adventure from "./imgs/discord-bot/adventure.png";
import gamba from "./imgs/discord-bot/gamba.png";



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
      <Outro/>
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
        <img class="bot-image hidden" src={adventure} alt="adventure"></img>
        <img class="bot-image hidden" src={gamba} alt="gamba"></img>
      </div>
      <div className='bot-description hidden'>
        Technology used: Discord API - Python<br></br>
        <br></br>
        This Discord Bot has mini-games in it like text adventures, gamba (both shown above), and magic 8 ball. Magic 8 ball is just magic 8 ball, nothing 
        special about it. Gamba is more like a mini-gambling game that has a few ways to gamble. Text adventure uses hashmap and custom struct to 
        parse the text file into different scenes. To see more you can look at the discord bot repo below. 👇🏻
        <br></br>
        <br></br>
        <a href="https://github.com/RitsuCloud/discord-bot">👉🏻 Discord Bot Repo</a>
      </div>
    </div>
  );
}

function Summary(){
  return(
    <div className='summary-container hidden'>
      <div className='summary'>I am a senior at the University of Washington Seattle, majoring in computer science. 
      I am passionate about solving complex problems and thrive on collaboration, always seeking opportunities to
      meet new people and learn from their experiences. I recognize there is much to be learned and am very eager to 
      do so. I am excited to make a meaningful impact and contribute to any project I am part of. Nice to meet you! 
      Nice to meet you!😁</div>
    </div>
  );
}

function Intro(){
  return(
    <div className='main-body-container' id="main-id">
      <div className='hidden'>Welcome To My Portfolio!⬇️😊</div>      
      <div className='hidden'>
        <div>I am Chon😄</div>
        <img class="chon" src={Chon} alt="Chon"></img>
      </div>
    </div>
  );
}

function Outro(){
  return(
    <div className='outro-container hidden'>
      <div className='summary'>
        Thank you for taking your time to look at my portfolio, if you have any feedback/suggestion 
        please let me know by sending me an email. Thank you 😆
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


