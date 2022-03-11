import React from 'react';
import Navbar from '../components/Navbar';
import DlButton from '../components/DlButton';

export default function Download() {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center bg-minerva-purple">
                <h1 className="pt-24 text-white text-5xl text-center">
                    Download Minerva
                </h1>
                <img
                    className="pt-12 w-4/5"
                    src="/images/minerva_prototype.png"
                    alt="minerva prototype"
                />
                <div className="mx-auto py-12 px-2 flex flex-wrap justify-center">
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
            </div>
        </div>
    );
}
