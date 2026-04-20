import React from 'react';
import { NavLink } from "react-router-dom";
import home from "../../assests/home.png"
import chart from "../../assests/ChartLine.png"
import time from "../../assests/time.png"

const Navbar = () => {
    const navLinkClass = ({ isActive }) =>
        isActive
            ? "bg-emerald-800 text-white text-sm font-medium px-4 py-2 rounded-md"
            : "text-gray-600 text-sm font-medium hover:text-emerald-800 transition-colors px-2 py-2";

    return (
        <nav className="w-full border-b border-gray-200 bg-white px-6 py-3 flex items-center justify-between">
            <p className="text-gray-800 text-sm">
                <span className="font-bold text-3xl">Keen</span><span className='font-bold text-[#244D3F] text-3xl'>Keeper</span>
            </p>
            <div className="flex items-center gap-4">
                <NavLink to="/" end className={navLinkClass}>
                    <div className='flex flex-row gap-1 '>
                        <img src={home} alt="home" />
                        <p>Home</p>
                    </div>
                </NavLink>
                <NavLink to="/timeline" className={navLinkClass}>
                    <div className='flex flex-row gap-1'>
                        <img src={time} alt="home" />
                        <p>Timeline</p>
                    </div>
                </NavLink>
                <NavLink to="/stats" className={navLinkClass}>
                    <div className='flex flex-row gap-1'>
                        <img src={chart} alt="home" />
                        <p>Stats</p>
                    </div>
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;