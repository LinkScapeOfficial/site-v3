import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/navbar'
import React from "react";


export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
          <NavBar/>
          <Component {...pageProps} />
      </>
  )
}
