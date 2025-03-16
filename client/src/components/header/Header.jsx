import logo from '../../assets/img/logo.png';

import { Link } from 'react-router';

const navigation = [
    { name: 'Home', path: '/', guest: true },
    { name: 'Plant Catalog', path: '/catalog', guest: true },
    { name: 'About', path: '/about', guest: true },
    { name: 'Register', path: '/register', guest: true },
    { name: 'Log in', path: '/login', guest: true },
    { name: 'Logout', path: '/logout', guest: false}
]

export default function Header() {
    
    return (
        <header id="header" className="header d-flex align-items-center position-relative">
            <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

                <a href="index.html" className="logo d-flex align-items-center">
                    <img src={logo} alt="GardenLogo" />
                    <h1 className="sitename">Virtual garden</h1> 
                </a>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        {navigation.map(item => 
                            <Link 
                                key={item.name} 
                                to={item.path}>{item.name}</Link>
                        )}

                        <li className="dropdown">
                            <a href="#"><span>Plant Managment</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                            <ul>
                                <li><a href="#"></a></li>
                                <li className="dropdown">
                                    <a href="#"><span>Managment</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                                    <ul>
                                        <li><a href="#">Personal Garden</a></li>
                                        <li><a href="#">Create</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Seach for additions</a></li>
                                <li><a href="#">Browse</a></li>
                            </ul>
                        </li>
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>

            </div>
        </header>
    );
}
