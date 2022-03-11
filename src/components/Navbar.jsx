import React from 'react';
import { Link } from 'gatsby';

export default function Navbar() {
    return (
        <div className="shadow-md h-16 flex items-center px-8 justify-between">
            <Link to="/">
                <img src="/images/logo.svg" alt="" className="w-28 pb-2" />
            </Link>
            <Link
                to="/download"
                className="hover:underline hover:text-minerva-purple"
            >
                Download
            </Link>
        </div>
    );
}
