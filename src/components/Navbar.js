import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
       <>
            <nav className="navbar navbar-light bg-primary">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                    <img src="public/logo512.png" alt="" width="30" height="24" className="d-inline-block align-text-top" />
                    Dev-vaccine
                    </Link>
                </div>
            </nav>
       </>  
    )
}
