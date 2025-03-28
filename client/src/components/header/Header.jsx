import { useState } from 'react';
import { Link } from 'react-router';
import useAuth from '../../hooks/useAuth';
import logo from '../../assets/img/logo.png';
import './Header.css';

export default function Header() {
    const { isAuthenticated } = useAuth();
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const toggleNav = () => {
        setIsNavCollapsed(!isNavCollapsed);
    };

    return (
        <header id="header" className="header">
            <div className="container-fluid container-xl header-container">
                {/* Logo */}
                <Link to="/" className="logo">
                    <img src={logo} alt="GardenLogo" />
                    <h1 className="sitename">Virtual garden</h1>
                </Link>

                {/* Mobile Toggle Button */}
                <button 
                    className="mobile-nav-toggle d-xl-none" 
                    onClick={toggleNav}
                    aria-expanded={!isNavCollapsed}
                >
                    <i className={isNavCollapsed ? "bi bi-list" : "bi bi-x"}></i>
                </button>

                {/* Navigation */}
                <nav 
                    id="navmenu" 
                    className={`navmenu ${isNavCollapsed ? 'collapsed' : 'expanded'}`}
                >
                    <ul>
                        <li><Link to="/" onClick={() => setIsNavCollapsed(true)}>Home</Link></li>
                        <li><Link to="/plants?page=1" onClick={() => setIsNavCollapsed(true)}>Plant Catalog</Link></li>
                        <li><Link to="/about" onClick={() => setIsNavCollapsed(true)}>About</Link></li>

                        {isAuthenticated ? (
                            <>
                                <li><Link to='/logout' onClick={() => setIsNavCollapsed(true)}>Logout</Link></li>
                                <li className="dropdown">
                                    <a href="#"><span>Plant Management</span> <i className="bi bi-chevron-down"></i></a>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/plants/garden" onClick={() => setIsNavCollapsed(true)}>Personal Garden</Link></li>
                                        <li><Link to="/plants/create" onClick={() => setIsNavCollapsed(true)}>Create</Link></li>
                                    </ul>
                                </li>
                            </>
                        ) : (
                            <>
                                <li><Link to="/register" onClick={() => setIsNavCollapsed(true)}>Register</Link></li>
                                <li><Link to="/login" onClick={() => setIsNavCollapsed(true)}>Login</Link></li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
}