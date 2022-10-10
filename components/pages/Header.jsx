import {useContext} from 'react'
import {GlobalContext} from '/contexts/GlobalContext'
import {URL} from '/data/URL'
export default function Header(){
    const {sideBar: {toggle, state}} = useContext(GlobalContext)

    return (
        <header className = 'shadow po-rel'>
            <div className = 'container'>
                <div className = 'row py-3 a-i-c j-c-space-between'>
                    <div className = 'col-auto'>
                        <a href = '/'>
                            <img src = './favicon.ico' width = '45' />
                        </a>
                    </div>
                    <div className = 'col-auto d-lg-none'>
                        <button onClick = {() => toggle()} className = 'theme-border rounded bg-clear px-2'>
                            <span className = {`bi bi-${state ? 'x' : 'border-width'} fa-2x theme-color`}></span>
                        </button>
                    </div>
                    <div className = 'd-none d-lg-block col-auto list-links header'>{
                        URL.map(({name, href}, index) => (
                            <a key = {`${href}-${index}`} href = {`#${href}`} className = 'page-links mx-4 ms d-inline-block text-capitalize'>{name}</a>
                        ))
                    }
                        <a title = 'Dowmload my CV' href = './pdf/cv.pdf' download = 'Taslim Musa-Azeez CV' className = 'mx-4 theme-color ms d-inline-block text-capitalize theme-border px-4 py-2 rounded'>resume</a>
                    </div>
                </div>
            </div>
        </header>
    )
}
