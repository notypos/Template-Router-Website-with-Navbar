import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Navbar() {
    return (
        <>
<nav className="nav">
    <Link to="/" className="site-title">Home</Link>
<ul>
    <li><Link to="/about">About Us</Link></li>
    <li><Link to="/users">Go to Users Page</Link></li> 
    <li><Link to="/contact">Contact</Link></li>
</ul>
    </nav>
    <Outlet />
    </>
    )
    };
