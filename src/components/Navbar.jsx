import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Close dropdown if clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="navbar bg-base-100 shadow">
            <div className="navbar-start">
                {/* Mobile Menu Button */}
                <div className="lg:hidden relative" ref={dropdownRef}>
                    <button onClick={toggleDropdown} className="p-2 rounded focus:outline-none hover:bg-gray-200 transition">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    {/* Custom Dropdown */}
                    {isDropdownOpen && (
                        <div className="absolute mt-2 w-48 bg-white rounded shadow-lg z-50">
                            <Link
                                to="/"
                                onClick={() => setIsDropdownOpen(false)}
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                                Homepage
                            </Link>
                            <Link
                                to="/tourinfo"
                                onClick={() => setIsDropdownOpen(false)}
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                                Tour Info & Pricing
                            </Link>
                            <Link
                                to="/contact"
                                onClick={() => setIsDropdownOpen(false)}
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                                Contact
                            </Link>
                        </div>
                    )}
                </div>

                {/* Logo */}
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img src="/logo3.png" alt="Sukama Bali Tour Logo" className="h-10" />
                </Link>
            </div>

            {/* Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="flex space-x-4">
                    <li>
                        <Link
                            to="/"
                            className="text-black font-semibold px-4 py-2 rounded hover:bg-primary hover:text-white transition"
                        >
                            Homepage
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/tourinfo"
                            className="text-black font-semibold px-4 py-2 rounded hover:bg-primary hover:text-white transition"
                        >
                            Tour Info & Pricing
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="text-black font-semibold px-4 py-2 rounded hover:bg-primary hover:text-white transition"
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
