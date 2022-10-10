import Head from 'next/head'
import '/public/css/globals.css'

import {useState} from 'react'
import {GlobalContext} from '/contexts/GlobalContext'

export default function App({Component, pageProps}){
    const [sideBarState, setSideBarState] = useState(false)

    const GlobalContextValue = {
        sideBar: {
            open: () => setSideBarState(true),
            close: () => setSideBarState(false),
            toggle: () => sideBarState ? setSideBarState(false) : setSideBarState(true),
            state: sideBarState,
        }
    }

    return (
        <GlobalContext.Provider value = {GlobalContextValue}>
            <Head>
                <title>Taslim Eniolla</title>
            </Head>
            <Component {...pageProps} />
        </GlobalContext.Provider>
    )
}
