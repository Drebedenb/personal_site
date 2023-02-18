import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="p-4 flex sm:justify-center space-x-4 bg-gray-500 text-white">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
        </nav>
    );
};

export default Navigation;