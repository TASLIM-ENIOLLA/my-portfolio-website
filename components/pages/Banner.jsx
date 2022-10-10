import {IsInView} from '/components/utilities'
import styles from '/public/css/components/pages/Banner.module.css'
import {useState, useEffect} from 'react'

function LetterByLetter({content, className}){
    const counter = 0;
    const [c, d] = useState('')

    useEffect(() => {
        const interval = setInterval(() => {
            if(counter < content.length){
                d(e => `${e}${content[counter]}`)
                counter++
            }
            else{
                clearInterval(interval)
            }
        }, 100)
    }, [])

    return (
        <div className = {className}>{c}</div>
    )
}

export default function Banner(){
    return (
        <section className = {styles.min_height}>
            <div className = 'container'>
                <div className = {`row ${styles.py4rem}`}>
                    <div className = {`col-12 mx-auto`}>
                        <p><span className = 'ms theme-color fo-s-16'>Hi, my name is</span></p>
                        <div className = 'py-4'>
                            <p className = {`bold big-text letter-spacing-1 heavy ${styles.fo_s_by_width}`}>Musa-Azeez Taslim</p>
                            <p className = {`bold big-text letter-spacing-1 heavy text-muted ${styles.fo_s_by_width}`}>I develop websites and web applications.</p>
                        </div>
                        <p className = 'fo-s-15 text-muted col-lg-9 px-0'>I’m a software engineer specializing in developing exquisite frontend designs as well as creating secure backend APIs. Currently, I’m commited to studying Web 3.0 technology in order to create systems that leverage on the benefits of blockchain technology to add value to the society and invent more efficient processes.</p>
                        <div className = 'pt-4'>
                            <a href = './pdf/cv.pdf' download = 'Taslim Musa-Azeez CV' className = 'fo-s-16 theme-color ms d-inline-block text-capitalize theme-border px-4 py-3 rounded'>download my CV</a>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                @media screen and (max-width: 768px){
                    .big-text{
                        font-size: 3rem !important;
                    }
                }
                .big-text{
                    font-size: 5vw;
                }
            `}</style>
        </section>
    )
}
