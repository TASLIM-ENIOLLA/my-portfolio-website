import {useEffect, useState} from 'react'
import {API_ROUTES} from '/config'

export default function About(){
    const [projectsData, setProjectsData] = useState([])

    useEffect(() => fetch(API_ROUTES.PROJECTS)
        .then(res => res.json())
        .then(({data}) => setProjectsData(data))
    , [])

    return (
        <section className = 'py-5' id = 'projects'>
            <div className = 'container py-5'>
                <div className = 'row'>
                    <div className = 'col-12'>
                        <div className = 'mx-auto' style = {{maxWidth: '900px'}}>
                            <div className = 'row'>
                                <div className = 'col-12 mb-3'>
                                    <p><span className = 'ms theme-color fo-s-15'>03. </span><span className = 'fa-4x bold heavy'>My projects</span></p>
                                </div>
                                <div className = 'col-12 text-muted'>{
                                    projectsData.map((data, index) => (
                                        <PortfilioCard key = {index} {...data} />
                                    ))
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                li{
                    list-style-type: disclosure-closed;
                }
                .image{
                    position: relative;
                }
                .image::before{
                    display: block;
                    content: "fgdshfjfhjh";
                    color: red;
                    width: 100%;
                    height: 100%;
                    border: 2px solid var(--theme-color);
                    position: absolute;
                    top: 3%;
                    left: 3%;
                }
            `}</style>
        </section>
    )
}

function PortfilioCard({title, name, description, project_image, tags, github, link}){
    return (
        <div className = 'row po-rel mb-7 overflow-0'>
            <div className = 'd-lg-none w-100'>
                <div className = 'col-12 bg-navy-lucent bg-image py-4 po-rel' style = {{zIndex: '1000000000'}}>
                    <div className = 'p-3'>
                        <div className = 'theme-color ms mb-2 text-capitalize'>{title}</div>
                        <div className = 'text-white h4 text-capitalize'>{name}</div>
                        <div className = 'text-muted py-4 my-3 rounded-lg'>{description}</div>
                        <div className = 'mb-3'>{
                            tags.map((tag, index) => (
                                <span key = {index} className = 'text-muted mr-4 ms mb-3'>{tag}</span>
                            ))
                        }</div>
                        <div className = 'text-white'>{
                            (github)
                            ? <a target = '_blank' title = {`Goto ${name} github repo`} href = {github} className = 'bi bi-github fa-2x mr-4 mb-3'></a>
                            : undefined
                        }
                            <a target = '_blank' title = {`Goto ${name} website`} href = {link} className = 'bi bi-box-arrow-up-right fa-2x mr-4 mb-3'></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className = 'd-none d-lg-block w-100'>
                <div className = 'col-lg-8 overflow-hidden' style = {{maxHeight: '350px'}}>
                    <div className = 'po-rel'>
                        <img src = {project_image} height = '350' className = 'overflow-0 d-block w-100' />
                        <div className = 'bg-navy-lucent-2 w-100 h-100 po-abs top-0 left-0'></div>
                    </div>
                </div>
                <div className = 'col-lg-6 po-abs text-right right-0' style = {{transform: 'translate(0, -50%)', top: '50%'}}>
                    <div className = 'theme-color ms mb-2 text-capitalize'>{title}</div>
                    <div className = 'text-white h4 text-capitalize col-9 px-0 ml-auto'>{name}</div>
                    <div className = 'text-muted bg-navy shadow my-3 rounded-lg p-4'>{description}</div>
                    <div className = 'mb-3'>{
                        tags.map((tag, index) => (
                            <span key = {index} className = 'text-muted ml-4 ms mb-3'>{tag}</span>
                        ))
                    }</div>
                    <div className = 'text-white'>{
                        (github)
                        ? <a target = '_blank' title = {`Goto ${name} github repo`} href = {github} className = 'bi bi-github fa-2x ml-4 mb-3'></a>
                        : undefined
                    }
                        <a target = '_blank' title = {`Goto ${name} website`} href = {link} className = 'bi bi-box-arrow-up-right fa-2x ml-4 mb-3'></a>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .bg-navy-lucent-2:hover{
                    background: #0d203400;
                }
                .bg-navy-lucent-2{
                    background: #0d2034d7;
                    transition: all .3s ease-in-out;
                }
                .bg-navy-lucent{
                    background: linear-gradient(#0d2034f7, #0d2034f7), url(${project_image});
                    background-size: cover;
                    background-position: top;
                }
                .mb-7{
                    margin-bottom: 7rem;
                }
            `}</style>
        </div>
    )
}
