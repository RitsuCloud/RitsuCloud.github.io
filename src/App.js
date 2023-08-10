import './App.css';
import Navbar from "./NavBar.js";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <div className='main-body-container' id="main-id">
        <div className='hello'>Hello!</div>
        <div className='hello'>你好!</div>
        <div className='hello'>Halo!</div>
        <div className='hello'>My</div>
        <div className='hello'>Name</div>
        <div className='hello'>Is</div>
        <div className='hello'>Chon</div>
      </div>
    </div>
  );
}

