import logo from '../../assets/img/logo.png';

import { Link } from 'react-router';
import useAuth from '../../hooks/useAuth';

export default function Header() {

    const { email, isAuthenticated } = useAuth();

    console.log(email, isAuthenticated)
    // const logoutHandler = async () => {

    //     setShowMessage(true);

    //     await logout();
    //     userLogoutHandler();

    //     setTimeout(() => {
    //         setShowMessage(false)
    //     }, 5000);

    //     navigate('/');
    // }

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

                        {isAuthenticated
                            ? (
                                <>
                                    <Link to='/logout'>Logout</Link>

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
                                            <li><Link to="/plants">Seach for additions</Link></li>
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

            {/* {showMessage && <Message message='✅ You have been logged out successfully.'/>} */}
        </header>
    );
}
