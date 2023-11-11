import './style.css';
import logo from './logo.png';
import Script from './script.js';
import { useEffect } from 'react';

function Navbar() {

    // Utilisez useEffect pour activer les sections lors du chargement
    useEffect(() => {
        Script();
    }, []);

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
                                <a href="#histoire">Disponibilités</a>
                            </li>
                            <li>
                                <a href="#telecharger">Prix</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>

                            </li>
                        </ul>
                    </div>
                </nav>
                <section className="sec-1 show-animate">
                    <h1 className='animate'>Bonjour, Je suis Inola</h1>
                    <p className='animate'>Monitrice d'équitation</p>
                </section>
            </div>
        </>
    );
}

export default Navbar;