import React from 'react';
import { Link } from 'gatsby';

export default function Navbar() {
    return (
        <div className="shadow-md h-20 flex items-center px-8 justify-between bg-minerva-purple">
            <Link to="/">
                <img
                    src="/images/minerva_logo.png"
                    alt="logo"
                    className="w-36 mt-4"
                />
            </Link>
            <Link to="/download" className="text-white text-lg hover:underline">
                Downloads
            </Link>
        </div>
    );
}
