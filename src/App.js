import './style/App.css';
import {useEffect} from "react";
import Navbar from "./NavBar.js";

export default function App() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
          entry.target.classList.add('show');
        }
      });
    });
  
    const hiddenElements = document.querySelectorAll(".hidden");
    console.log(hiddenElements)
    console.log("huuuuuuh")
    hiddenElements.forEach((el) => observer.observe(el));
  });
  
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
        <div className='main-body-container' id="main-id">
          <div className='hidden'>Welcome!</div>
          <div className='hidden'>To my </div>
          <div className='hidden'>Portfolio</div>
          <div className='hidden'>I am Chon Hin Chou 😄</div>
      </div>
    </div>
  );
}



