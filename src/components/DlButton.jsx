/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'gatsby';

export default function DlButton({ buttonText, url }) {
    return (
        <Link className="m-2" to={url}>
            <button
                className="bg-white text-minerva-purple shadow-md rounded w-40 py-2 hover:opacity-80"
                type="button"
            >
                {buttonText}
            </button>
        </Link>
    );
}
