/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'gatsby';

export default function DlButton({ buttonText, url }) {
    return (
        <Link className="m-4" to={url}>
            <button
                className="bg-white text-minerva-purple shadow-md text-lg rounded w-40 py-2 hover:opacity-80"
                type="button"
            >
                {buttonText}
            </button>
        </Link>
    );
}
