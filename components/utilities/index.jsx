import {useState, useEffect, useRef} from 'react'

export function ContentLoader({children, animation = 'animated fadeIn'}){
    const [visible, setVisible] = useState(false)

    useEffect(() => setVisible(true), [])

    return (
        <div className = {visible ? animation : 'visibility-0'}>{children}</div>
    )
}

export function IsInView({children, animation = 'fadeIn'}){
    const section = useRef()
    const [elementHasBeenViewed, setElementHasBeenViewed] = useState(false)

    useEffect(() => {
        const parentElement = section.current.parentElement;

        const halfWindowHeight = window.screen.height * .75
        const parentScrolledHeight = section.current.parentElement.scrollTop
        const elementOffsetFromParentTop = section.current.offsetTop

        const viewed = halfWindowHeight + parentScrolledHeight > elementOffsetFromParentTop
        const action = () => setElementHasBeenViewed(viewed)

        window.addEventListener('load', action)
        parentElement.addEventListener('scroll', action)
    }, [])

    return (
        <div ref = {section} className = {elementHasBeenViewed ? `animated ${animation}` : 'visibility-0'}>
            {children}
        </div>
    )
}
