import React from 'react';
import { Link } from 'gatsby';

export default function Navbar() {
    return (
        <div className="shadow-md h-16 flex items-center px-8 justify-between bg-minerva-purple">
            <Link to="/">
                <img
                    src="/images/minerva_logo.png"
                    alt="logo"
                    className="w-28 mt-2"
                />
            </Link>
            <Link to="/download" className="text-white hover:underline">
                Downloads
            </Link>
        </div>
    );
}
