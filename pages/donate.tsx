import React from 'react';

export default function Donate() {
    return (
        <div className="flex flex-col h-512px screen">
            <iframe src="https://bank.hackclub.com/donations/start/linkscape" name="donateFrame" height="780px" width="screen" allowFullScreen></iframe>
        </div>
    )
}