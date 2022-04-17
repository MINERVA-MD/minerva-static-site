import React from 'react';
import downloadUrls from '../Content/downloadUrls';
import DlButton from './DlButton';

export default function AllDownloads() {
    return (
        <div className="flex flex-col items-center bg-minerva-purple overflow-hidden height-min-nav">
            <h1 className="px-2 text-white text-5xl text-center mt-48">
                Alternative Downloads
            </h1>
            <div className="mx-auto pt-12 px-2 flex flex-wrap justify-center">
                <DlButton buttonText="Windows" url={`${downloadUrls.win}`} />
                <DlButton
                    buttonText="macOS(intel)"
                    url={`${downloadUrls.macIntel}`}
                />
                <DlButton
                    buttonText="macOS(arm)"
                    url={`${downloadUrls.macArm}`}
                />
                {/* <DlButton buttonText="Linux(snap)" url="//" /> */}
            </div>
        </div>
    );
}
