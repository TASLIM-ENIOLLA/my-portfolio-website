import Template from '/components/pages/Template'
import Banner from '/components/pages/Banner'
import About from '/components/pages/About'
import Projects from '/components/pages/Projects'
import Experience from '/components/pages/Experience'
import Contact from '/components/pages/Contact'

export default function Index(){
    return (
        <Template>
            <Banner />
            <About />
            <Experience />
            <Projects />
            <Contact />
        </Template>
    )
}
