import './style.css';
import logo from './logo.png';

function Navbar() {
  return (
    <>
    <div className="accueil" id="accueil">
        <input type="checkbox" id="burger" />
        <label htmlFor="burger" className="menu">
            <div className="top" />
            <div className="middle" />
            <div className="bottom" />
        </label>
        <nav className="navbar">
            <img src={logo} className='navbar_logo'/>
            <div className="nav-wrapper">
                <ul className='navbar_ul'>
                    <li>
                    <a href="#accueil">Accueil</a>
                    </li>
                    <li>
                    <a href="#histoire">Histoire</a>
                    </li>
                    <li>
                    <a href="#telecharger">Telecharger</a>
                    </li>
                    <li>
                    <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
        <header></header>
    </div>
    </>
    );
}   

export default Navbar;