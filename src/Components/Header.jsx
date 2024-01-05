import React, { useState, useEffect } from "react";
import { Link, useLocation} from "react-router-dom";

function Header(){

    const [activeLink, setActiveLink] = useState("home");
    const location = useLocation();

    useEffect(() => {
        console.log('Current path:', location.pathname);
      }, [location.pathname]);

    return(
        <nav className="navbar bg-warning">
            <div className="container">
                <Link className="navbar-brand" href="#">
                <img src="https://myv3ads.com/img/logo.png" alt="Bootstrap" width="50" height="50"/>
                </Link>
                <span className="navbar-text">
                    Sri Jeyanth Marketing
                </span>
                <div className="">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-warning p-4">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname == "/" && "active"}`} 
                                aria-current="page" to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname == "/about" && "active"}`} to="/about"
                                >
                                    About store
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;