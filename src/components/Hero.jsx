import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'gatsby';

export default function Hero() {
    const [os, setOs] = useState(null);

    function checkOS() {
        const isBrowser = typeof window !== 'undefined';
        if (isBrowser) {
            const browserReportedOS = window.navigator.appVersion.toLowerCase();

            // make release urls a single object you can update once and have it reflect across the site
            if (browserReportedOS.includes('mac')) {
                setOs({
                    os: 'Mac',
                    url: 'https://github.com/MINERVA-MD/minerva/releases/download/v0.0.12_mac_intel/minerva_0.0.12.dmg',
                });
            } else if (browserReportedOS.includes('win')) {
                setOs({
                    os: 'Windows',
                    url: 'https://github.com/MINERVA-MD/minerva/releases/download/v0.0.12_win_x64/minerva_0.0.12.exe',
                });
                // } else if (browserReportedOS.includes('linux')) {
                //     setOs({
                //         os: 'Linux',
                //         url: 'https://github.com/MINERVA-MD/minerva/releases/download/v0.1_win_x64/electron-vue-ts-starter_1.0.0.exe',
                //     });
            }
        }
    }

    const bgEl = useRef(null);

    useEffect(() => {
        checkOS();
    }, []);

    return (
        <div
            className="flex flex-col items-center bg-minerva-purple overflow-hidden height-min-nav"
            ref={bgEl}
        >
            <h1 className="pt-24 px-2 text-white text-5xl sm:text-7xl font-bold text-center">
                Markdown for Professionals.
            </h1>
            <div className="flex flex-col">
                <Link to={os?.url}>
                    <button
                        type="button"
                        className="bg-white text-minerva-purple text-lg font-semibold px-6 py-3 shadow-md hover:opacity-80 rounded mt-12"
                    >
                        Download for{' '}
                        <span className="text-minerva-purple">{os?.os}</span>
                    </button>
                </Link>
                <p className="text-white italic pt-2 text-center text-sm">
                    <Link to="/download" className="hover:underline">
                        See all downloads
                    </Link>
                </p>
            </div>
            <div className="bg-minerva-purple h-full flex items-end">
                <img
                    className="bg-minerva-purple mx-auto pt-6 w-full sm:w-5/6 max-w-6xl"
                    src="/images/minerva_prototype.png"
                    alt="minerva prototype"
                />
            </div>
        </div>
    );
}
