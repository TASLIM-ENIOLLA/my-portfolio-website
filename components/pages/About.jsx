export default function About(){
    return (
        <section className = 'py-5' id = 'about'>
            <div className = 'container py-5'>
                <div className = 'row'>
                    <div className = 'col-12'>
                        <div className = 'mx-auto' style = {{maxWidth: '900px'}}>
                            <div className = 'row'>
                                <div className = 'col-12 mb-3'>
                                    <p><span className = 'ms theme-color fo-s-15'>01. </span><span className = 'fa-4x bold heavy'>About me</span></p>
                                </div>
                                <div className = 'col-md-8 mb-4 fo-s-15 text-muted'>
                                    <div className = ''>
                                        <p>
                                            Hi, My name is Taslim and I enjoy developing web based systems. My journey as a developer started in 2018 when I began learning about HTML &amp; CSS which I found intriguing. I learned a lot through constant practice and also from following developer discussions online.
                                        </p>
                                        <p>
                                            Today, I have had the opportunity to work with various developers on different project ranging from build frontend design to developing fullstack applications.
                                        </p>
                                        <p>
                                            In my local community, I am a major stakeholder in a tech startup that aims at teaching tech skills to youths and teenagers in order to have a society of people who are tech literates and can leverage on technological tools and services to make life better.
                                        </p>
                                    </div>
                                    <div>
                                        <p>Here are a few technologies I’ve been working with recently:</p>
                                        <div className = 'row'>
                                            <div className = 'col-6 mb-4'>
                                                <li>JavaScript (ES6+)</li>
                                            </div>
                                            <div className = 'col-6 mb-4'>
                                                <li>React</li>
                                            </div>
                                            <div className = 'col-6 mb-4'>
                                                <li>Next JS</li>
                                            </div>
                                            <div className = 'col-6 mb-4'>
                                                <li>Express JS</li>
                                            </div>
                                            <div className = 'col-6 mb-4'>
                                                <li>PHP</li>
                                            </div>
                                            <div className = 'col-6 mb-4'>
                                                <li>MySQL</li>
                                            </div>
                                            <div className = 'col-6 mb-4'>
                                                <li>MongoDB</li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className = 'col-md-4 mb-4'>
                                    <div className = 'po-rel'>
                                        <img className = 'd-block w-100 rounded-lg' src = './taslim.png' />
                                    </div>
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
                    display: block;
                    width: 100% !important;
                    border: 3px solid var(--theme-color);
                    top: 7%;
                    left: 7%;
                    z-index: -100;
                }
            `}</style>
        </section>
    )
}
