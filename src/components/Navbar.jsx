import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        <Link to={"/"}>Homepage</Link>
                        <Link to={"/tourinfo"}>Tour Info & Pricing</Link>
                        <Link to={"/contact"}>Contact</Link>
                    </ul>
                </div>

                {/* Logo di sisi kiri navbar */}
                <Link to={"/"} className="btn btn-ghost">
                    <img src="/logo3.png" alt="Sukama Bali Tour Logo" className="h-10" />
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link
                            to="/"
                            className="text-black font-semibold px-4 py-2 rounded hover:bg-primary hover:text-white transition duration-300"
                        >
                            Homepage
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/tourinfo"
                            className="text-black font-semibold px-4 py-2 rounded hover:bg-primary hover:text-white transition duration-300"
                        >
                            Tour Info & Pricing
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="text-black font-semibold px-4 py-2 rounded hover:bg-primary hover:text-white transition duration-300"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>


            <div className="navbar-end">
                <Link to="/booking-form" className="btn btn-primary text-white">Book Now</Link>
            </div>
        </div>
    );
};

export default Navbar;
