import './App.css';
import Navbar from "./NavBar.js";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <div className='main-body-container' id="main-id">
        <p>Hello World</p>
      </div>
    </div>
  );
}

