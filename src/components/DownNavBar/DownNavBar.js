import React from 'react';
import "./DownNavBar.css"

const DownNavBar = () => {
    return (
        <div className={"downNavBar"}>
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Главная</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/chat">chat</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/community">Community</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/profile">profile</a>
                </li>
            </ul>
        </div>
    );
};

export default DownNavBar;