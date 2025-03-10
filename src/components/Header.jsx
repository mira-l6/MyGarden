import logo from '../assets/img/logo.png';

export default function Header() {
    
    return (
        <header id="header" className="header d-flex align-items-center position-relative">
            <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

                <a href="index.html" className="logo d-flex align-items-center">
                    <img src={logo} alt="GardenLogo" />
                    <h1 className="sitename">My garden</h1> 
                </a>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><a href="" className="active">Home</a></li>
                        <li><a href="">Plant Catalog</a></li>
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
                        <li><a href="">Our Services</a></li>
                        <li><a href="">Register</a></li>
                        <li><a href="">Log in</a></li>
                        {/* for logged in users only -> operations with plants */}
                        <li><a href="">Logout</a></li>
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>

            </div>
        </header>
    );
}
