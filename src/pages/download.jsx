import React from 'react';
import Navbar from '../components/Navbar';
import DlButton from '../components/DlButton';

export default function Download() {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center bg-minerva-purple overflow-hidden ">
                <h1 className="pt-24 px-2 text-white text-5xl text-center">
                    Download Minerva
                </h1>
                <div className="mx-auto pt-12 px-2 flex flex-wrap justify-center">
                    <DlButton
                        buttonText="Windows"
                        url="https://github.com/MINERVA-MD/minerva/releases/download/v0.1_win_x64/electron-vue-ts-starter_1.0.0.exe"
                    />
                    <DlButton
                        buttonText="macOS(intel)"
                        url="https://github.com/MINERVA-MD/minerva/releases/download/v0.1_mac_x64/electron-vue-ts-starter_1.0.0.dmg"
                    />
                    <DlButton
                        buttonText="macOS(arm)"
                        url="https://github.com/MINERVA-MD/minerva/releases/download/v0.1_mac_x64/electron-vue-ts-starter_1.0.0.dmg"
                    />
                </div>
                <img
                    className="pt-6 w-11/12 sm:w-5/6 max-w-5xl translate-y-12"
                    src="/images/minerva_prototype.png"
                    alt="minerva prototype"
                />
            </div>
        </div>
    );
}
