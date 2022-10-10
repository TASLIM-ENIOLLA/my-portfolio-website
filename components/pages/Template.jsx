import Header from '/components/pages/Header'
import Footer from '/components/pages/Footer'
import styles from '/public/css/components/pages/Template.module.css'
import {URL} from '/data/URL'

import {useContext} from 'react'
import {GlobalContext} from '/contexts/GlobalContext'

export default function Template({children}){
    const {sideBar: {state}} = useContext(GlobalContext)

    return (
        <>
            <section className = 'vh100 vw100 overflow-x-0 transit sidebar-blur'>
                <div className = 'po-sticky top-0 left-0'>
                    <Header />
                </div>
                <div className = 'container-fluid'>
                    <div className = 'row'>
                        <div className = 'col-auto d-none d-md-block'>
                            <div className = {`${styles.rigid_height} flex-v justify-content-end`}>
                                <LeftContactLink />
                            </div>
                        </div>
                        <div className = 'col'>
                            <div className = {`${styles.rigid_height} overflow-y-auto`}>
                                {children}
                                <Footer />
                            </div>
                        </div>
                        <div className = 'col-auto d-none d-md-block'>
                            <div className = {`${styles.rigid_height} flex-v justify-content-end`}>
                                <RightContactLink />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SideBar />
            <style jsx>{`
                .sidebar-blur{
                    filter: blur(${state ? 5 : 0}px);
                }
            `}</style>
            <script src = './js/components/pages/header.js'></script>
        </>
    )
}

function SideBar(){
    const {sideBar: {toggle, state}} = useContext(GlobalContext)

    return (
        <section className = {`${state ? 'animated fadeIn' : 'd-none'} po-fixed top-0 left-0 flex-h vw100 z-index-100000`}>
            <div className = 'flex-1 vh100' onClick = {() => toggle()}></div>
            <div className = {`bg-navy shadow-lg px-4 py-5 vh100 flex-v sidebar ${state ? 'animated slideInRight' : 'd-none'}`}>
                <div className = 'pb-5 row a-i-c px-2'>
                    <div className = 'col-auto'>
                        <button onClick = {() => toggle()} className = 'theme-border rounded bg-clear px-2'>
                            <span className = {`bi bi-${state ? 'x' : 'border-width'} fa-2x theme-color`}></span>
                        </button>
                    </div>
                    <div className = 'col'>
                        <a href = '/'>
                            <img src = './vercel.svg' width = '100' />
                        </a>
                    </div>
                </div>
                <div className = 'flex-1 overflow-y-auto p-2'>{
                    URL.map(({name, href}, index) => (
                        <div key = {`${href}-${index}`} className = 'mb-4'>
                            <a onClick = {() => toggle()} href = {`#${href}`} className = 'page-links ms fo-s-15 d-inline-block text-capitalize'>{name}</a>
                        </div>
                    ))
                }
                    <div className = 'mb-4 pt-4'>
                        <a title = 'Dowmload my CV' href = './pdf/cv.pdf' download = 'Taslim Musa-Azeez CV' className = 'theme-color ms fo-s-15 d-inline-block text-capitalize theme-border px-4 py-2 rounded'>resume</a>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .sidebar{
                    width: 90%;
                    max-width: 320px !important;
                }
                .z-index-100000{
                    z-index: 100000;
                }
            `}</style>
            <script src = './js/components/pages/header.js'></script>
        </section>
    )
}

function LeftContactLink(){
    return (
        <div className = 'flex-v a-i-c pt-3 px-3'>
            <a target = '_blank' href = 'https://github.com/TASLIM-ENIOLLA' className = 'd-block mb-4 transit'>
                <span className = 'bi bi-github fo-s-16'></span>
            </a>
            {/* <a target = '_blank' href = '' className = 'd-block mb-4 transit'>
                <span className = 'bi bi-instagram fo-s-16'></span>
            </a> */}
            <a target = '_blank' href = 'https://facebook.com/musaazeez.taslim' className = 'd-block mb-4 transit'>
                <span className = 'bi bi-facebook fo-s-16'></span>
            </a>
            <a target = '_blank' href = 'https://twitter.com/@MusaAzeezDFirst' className = 'd-block mb-4 transit'>
                <span className = 'bi bi-twitter fo-s-16'></span>
            </a>
            <a target = '_blank' href = '' className = 'd-block mb-4 transit'>
                <span className = 'bi bi-linkedin fo-s-16'></span>
            </a>
            <a target = '_blank' href = 'mailto://taslim.eniolla@gmail.com' className = 'd-block mb-4 transit'>
                <span className = 'bi bi-at fo-s-16'></span>
            </a>
            <div className = {`${styles.vertical_line} bg-white rounded-lg`}></div>
        </div>
    )
}

function RightContactLink(){
    return (
        <div className = 'flex-v a-i-c pt-3 px-3'>
            <a href = 'mailto://taslim.eniolla@gmail.com' className = {`${styles.vertical_rl} d-block mb-4 transit`}>
                <span className = 'ms letter-spacing-1'>taslim.eniolla@gmail.com</span>
            </a>
            <div className = {`${styles.vertical_line} bg-white rounded-lg`}></div>
        </div>
    )
}
