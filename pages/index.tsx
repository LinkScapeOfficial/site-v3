import Home from '../components/home'
import Sponsors from '../components/sponsors'
import Leaders from "../components/leaders";
import Newsletter from '../components/newsletter';
import Head from 'next/head'

export default function Index() {
    return (
        <>
            <Head>
                <title>LinkScape | Home</title>
            </Head>
            <Home />
            <Sponsors />
            <Leaders />
            <Newsletter />
        </>
    )
}
