import React, { useEffect, useState } from 'react';
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
                    url: 'https://github.com/MINERVA-MD/minerva/releases/download/v0.1_mac_x64/electron-vue-ts-starter_1.0.0.dmg',
                });
            } else if (browserReportedOS.includes('win')) {
                setOs({
                    os: 'Windows',
                    url: 'https://github.com/MINERVA-MD/minerva/releases/download/v0.1_win_x64/electron-vue-ts-starter_1.0.0.exe',
                });
            } else if (browserReportedOS.includes('linux')) {
                setOs({
                    os: 'Linux',
                    url: 'https://github.com/MINERVA-MD/minerva/releases/download/v0.1_win_x64/electron-vue-ts-starter_1.0.0.exe',
                });
            }
        }
    }
    useEffect(() => {
        checkOS();
    }, []);

    return (
        <div className="bg-minerva-purple flex flex-col justify-center items-center h-screen height-min-nav w-screen top-0">
            <h1 className="text-white text-5xl sm:text-7xl font-bold pb-12 text-center px-4">
                Minerva Markdown
            </h1>
            {}
            {os !== null ? (
                <div>
                    <Link to={os.url}>
                        <button
                            type="button"
                            className="bg-white text-minerva-purple text-lg font-semibold px-6 py-3 shadow-md hover:bg-gray-100 rounded"
                        >
                            Download for{' '}
                            <span className="text-minerva-purple">{os.os}</span>
                        </button>
                    </Link>
                    <p className="text-white italic pt-2 text-center">
                        See all{' '}
                        <Link to="/download" className="underline">
                            downloads
                        </Link>
                    </p>
                </div>
            ) : (
                <p className="text-white italic">
                    We couldn't detect your operating system. See all{' '}
                    <Link className="underline" to="/download">
                        downloads
                    </Link>
                </p>
            )}
        </div>
    );
}
