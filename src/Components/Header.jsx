import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header(){
    return(
        <nav className="navbar bg-warning">
            <div className="container">
                <a className="navbar-brand" href="#">
                <img src="https://myv3ads.com/img/logo.png" alt="Bootstrap" width="50" height="50"/>
                </a>
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
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About store</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;