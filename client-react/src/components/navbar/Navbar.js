import React from "react";
import { Link } from "react-router-dom";
import { GiLoveInjection } from "react-icons/gi";

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-dark navbar_bg">
                <div className="container-fluid col-11">
                    <Link to="/" className="navbar-brand">
                        <b>
                            Dev <GiLoveInjection /> vaccine
                        </b>
                    </Link>
                </div>
            </nav>
        </>
    );
}
