import {useState} from 'react'
import {TabNContent} from '/components/tabs/ExperienceTab'
import {IsInView} from '/components/utilities'

export default function Experience(){
    return (
        <section className = 'py-5' id = 'experience'>
            <div className = 'container py-5'>
                <div className = 'row'>
                    <div className = 'col-12'>
                        <ExperienceTab />
                    </div>
                </div>
            </div>
        </section>
    )
}

function ExperienceTab(){
    const [tabTitle, setTabTitle] = useState(Object.keys(TabNContent)[0])
    const TabContent = () => TabNContent[tabTitle]

    return (
        <div className = 'mx-auto' style = {{maxWidth: '800px'}}>
            <div className = 'row'>
                <div className = 'col-12 mb-3'>
                    <p><span className = 'ms theme-color fo-s-15'>02. </span><span className = 'fa-4x bold heavy'>My work experience</span></p>
                </div>
                <div className = 'col-4 d-none d-md-block'>
                    <div className = 'border-left- h-100 py-3'>{
                        Object.keys(TabNContent).map(tabName => (
                            <button onClick = {() => setTabTitle(tabName)} key = {tabName} className = {`${tabTitle === tabName ? 'theme-border-left bg-lightest-navy' : 'border-left-0 bg-clear'} transit border-top-0 border-right-0 border-bottom-0 px-3 text-left text-capitalize py-3 my-btn`}>
                                <span className = 'ms theme-color one-line'>{tabName}</span>
                            </button>
                        ))
                    }</div>
                </div>
                <div className = 'col-12 d-md-none mb-3'>
                    <div className = 'row no-wrap overflow-x-auto'>{
                        Object.keys(TabNContent).map(tabName => (
                            <div key = {tabName} className = 'col-auto px-0' id = {tabName.replace(/\s/g, '-')}>
                                <button onClick = {() => setTabTitle(tabName)} className = {`${tabTitle === tabName ? 'bg-lightest-navy' : 'bg-clear'} transit border-0 px-3 text-left text-capitalize py-3 my-btn`}>
                                    <span className = 'ms theme-color'>{tabName}</span>
                                </button>
                            </div>
                        ))
                    }</div>
                </div>
                <div className = 'col-md-8 text-muted fo-s-15'>
                    <div className = 'py-3'>
                        <TabContent />
                    </div>
                </div>
            </div>
            <style jsx>{`
                .no-wrap{
                    flex-wrap: nowrap;
                }
                .my-btn:focus{
                    outline: 0;
                    background: var(--light-navy);
                }
                .theme-border-left{
                    position: relative;
                }
                .theme-border-left::before{
                    content: '';
                    display: block;
                    width: 4px;
                    background: var(--theme-color);
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    transform: translate(-100%, 0);
                }
            `}</style>
            <style global jsx>{`
                .disclosure-closed{
                    list-style-type: disclosure-closed;
                }
                .disclosure-closed li{
                    margin-bottom: 10px;
                }
            `}</style>
        </div>
    )
}
