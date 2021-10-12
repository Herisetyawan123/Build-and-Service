import React from 'react';
import './navbar.css';
import Logo from "../../assets/logo.png";

export default function Navbar() {
    return (
        <>
            <nav className="shadow-lg bg-primary">
                    <div className="max-w-6xl mx-auto p-4">
                    <div className="flex flex-row justify-between">
                        <div>
                            <img src={Logo} alt="Logo" className="w-20"></img>
                        </div>
                        <div className="hidden md:flex items-center">
                            <a 
                                className="nav-link font-medium mx-5" 
                                style={{ 
                                    color: 'rgba(255,255,255, 1)',
                                }} 
                                href="/">
                                    Home
                            </a>
                            <a className="nav-link font-medium mx-5" style={{ color: 'rgba(255,255,255, 1)',
                             }} href="/">Our Service</a>
                            <a className="nav-link font-medium mx-5" style={{ color: 'rgba(255,255,255, 1)',
                             }} href="/">Our Project</a>
                            <a className="nav-link font-medium mx-5" style={{ color: 'rgba(255,255,255, 1)',
                             }} href="/">Our Team</a>
                        </div>
                    </div>
                    </div>
                </nav>
        </>
    )
}