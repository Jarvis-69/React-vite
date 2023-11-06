import './style.css';
import logo from './logo.png';

function Navbar() {
    const sections = document.querySelectorAll('section');

    window.onscroll = () => {
        sections.forEach((section) => {
            const top = window.scrollY;
            const offset = section.offsetTop - 200;
            const height = section.offsetHeight;

            if (top >= offset && top < offset + height) {
                section.classList.add('show-animate');
            }
            else {
                section.classList.remove('show-animate');
            }
        })};

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
                <section className="section">
                    <h1 className='h1_navbar'>Bonjour, Je suis Inola</h1>
                    <p className='p_navbar'>Monitrice d'équitation</p>
                </section>
            </div>
        </>
    );
}

export default Navbar;