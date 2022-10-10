export default function Footer(){
    return (
        <section>
            <div className = 'container pt-5 pb-4'>
                <div className = 'row pt-5'>
                    <div className = 'col-auto mx-auto'>
                        <div className = 'd-md-none flex-h a-i-c mb-4'>
                            <a href = 'https://github.com/TASLIM-ENIOLLA' className = 'd-block mx-3 transit'>
                                <span className = 'bi bi-github fo-s-16'></span>
                            </a>
                            <a href = '' className = 'd-block mx-3 transit'>
                                <span className = 'bi bi-instagram fo-s-16'></span>
                            </a>
                            <a href = '' className = 'd-block mx-3 transit'>
                                <span className = 'bi bi-twitter fo-s-16'></span>
                            </a>
                            <a href = '' className = 'd-block mx-3 transit'>
                                <span className = 'bi bi-linkedin fo-s-16'></span>
                            </a>
                            <a href = 'mailto://taslim.eniolla@gmail.com' className = 'd-block mx-3 transit'>
                                <span className = 'bi bi-at fo-s-16'></span>
                            </a>
                        </div>
                        <p className = 'text-center'>
                            <span className = 'd-block ms text-light letter-spacing-1 mb-3'>Developed by Taslim Musa-Azeez &copy; {new Date().getFullYear()}</span>
                            <span className = 'd-block ms text-muted letter-spacing-1 mb-3'>Inspired by Brittany Chiang</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
