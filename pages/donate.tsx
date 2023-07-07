import React from 'react';
import Head from 'next/head'

export default function Donate() {
    return (
        <div className="flex flex-col h-512px screen">
            <Head>
                <title>LinkScape | Donate</title>
            </Head>
            <iframe src="https://bank.hackclub.com/donations/start/linkscape" name="donateFrame" height="780px" width="screen" allowFullScreen></iframe>
        </div>
    )
}