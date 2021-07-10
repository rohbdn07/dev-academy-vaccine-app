import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
       <>
            <nav className="navbar navbar-light bg-info">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <b>Dev-vaccine</b>
                    </Link>
                </div>
            </nav>
       </>  
    )
}
