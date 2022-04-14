import React from 'react';
import DlButton from './DlButton';

export default function AllDownloads() {
    return (
        <div className="flex flex-col items-center bg-minerva-purple overflow-hidden height-min-nav">
            <h1 className="px-2 text-white text-5xl text-center mt-48">
                Alternative Downloads
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
                    url="https://github.com/MINERVA-MD/minerva/releases/download/v0.1_mac_arm/electron-vue-ts-starter_1.0.0.dmg"
                />
                {/* <DlButton buttonText="Linux(snap)" url="//" /> */}
            </div>
        </div>
    );
}
