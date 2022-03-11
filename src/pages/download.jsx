import React from 'react';
import { Link } from 'gatsby';
import Navbar from '../components/Navbar';

export default function Download() {
    return (
        <div>
            <Navbar />
            <div className="h-96 flex justify-center items-center">
                <div className="">
                    <Link
                        className="mx-2"
                        target="_blank"
                        to="https://github.com/MINERVA-MD/minerva/releases/download/v0.1_win_x64/electron-vue-ts-starter_1.0.0.exe"
                    >
                        <button
                            className="bg-blue-500 text-white px-4 py-2"
                            type="button"
                        >
                            Windows
                        </button>
                    </Link>
                    <Link
                        className="mx-2"
                        target="_blank"
                        to="https://github.com/MINERVA-MD/minerva/releases/download/v0.1_mac_x64/electron-vue-ts-starter_1.0.0.dmg"
                    >
                        <button
                            className="bg-white text-black border-black border-2 px-4 py-2 "
                            type="button"
                        >
                            macOS(intel)
                        </button>
                    </Link>
                    <Link
                        className="mx-2"
                        target="_blank"
                        to="https://github.com/MINERVA-MD/minerva/releases/download/v0.1_mac_x64/electron-vue-ts-starter_1.0.0.dmg"
                    >
                        <button
                            className="bg-minerva-purple text-white px-4 py-2"
                            type="button"
                        >
                            macOS(apple silicon)
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
