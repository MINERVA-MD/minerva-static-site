import React from 'react';
import { Link } from 'gatsby';

export default function Hero() {
    return (
        <div className="bg-minerva-purple flex flex-col justify-center items-center h-screen height-min-nav w-screen top-0">
            <h1 className="text-white text-5xl sm:text-7xl font-bold pb-12 text-center px-4">
                Minerva Markdown
            </h1>
            <Link to="/download">
                <button
                    type="button"
                    className="bg-white text-minerva-purple text-lg font-semibold px-6 py-3 shadow-md hover:bg-gray-100 rounded"
                >
                    Download
                </button>
            </Link>
        </div>
    );
}
