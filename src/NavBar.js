import './style/NavBar.css';

export default function NavBar(){
  return(
    <div className='higher-NavBar'>
      <div className="name-NavBar">Chon Hin Chou</div>
      <div className="links-NavBar">
        <a href="#main-id">Home</a>
        <a href="https://www.linkedin.com/in/chon-hin-chou/">LinkedIn</a>
        <a href="https://github.com/RitsuCloud">GitHub</a>
        <a href="#castle-project-id">Project</a>
        <a href="#contact-id">Contact</a>
      </div>
    </div>
  )
}