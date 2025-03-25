import logo from '../../assets/img/logo.png';

import { Link, useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import { useLogout } from '../../api/userApi';
import { useUserContext } from '../../contexts/UserContext';

export default function Header() {

    const { email } = useAuth();

    const { userLogoutHandler } = useUserContext();
    const { logout } = useLogout();

    const [showMessage, setShowMessage] = useState();
    const navigate = useNavigate();

    const logoutHandler = async () => {

        setShowMessage(true);

        await logout();
        userLogoutHandler();

        setTimeout(() => {
            setShowMessage(false)
        }, 5000);

        navigate('/');
    }

    return (
        <header id="header" className="header d-flex align-items-center position-relative">
            <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

                <Link to="/" className="logo d-flex align-items-center">
                    <img src={logo} alt="GardenLogo" />
                    <h1 className="sitename">Virtual garden</h1>
                </Link>

                <nav id="navmenu" className="navmenu">
                    <ul>

                        <Link to="/">Home</Link>
                        <Link to="/plants?page=1">Plant Catalog</Link>
                        <Link to="/about">About</Link>

                        {email
                            ? (
                                <>
                                    <Link onClick={logoutHandler}>Logout</Link>

                                    <li className="dropdown">
                                        <a href="#"><span>Plant Managment</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                                        <ul>
                                            <li><a href="#"></a></li>
                                            <li className="dropdown">
                                                <a href="#"><span>Managment</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                                                <ul>
                                                    <li><Link to="/plants/garden">Personal Garden</Link></li>
                                                    <li><Link to="/plants/create">Create</Link></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Seach for additions</a></li>
                                            <li><a href="#">Browse</a></li>
                                        </ul>
                                    </li>
                                </>
                            )
                            : (<>

                                <Link to="/register">Register</Link>
                                <Link to="/login">Login</Link>
                            </>)
                        }
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>

            </div>

            {showMessage && (
                <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-white text-black px-6 py-3 rounded-lg shadow-lg transition-opacity duration-300">
                    ✅ You have been logged out successfully.
                </div>
            )}
        </header>
    );
}
