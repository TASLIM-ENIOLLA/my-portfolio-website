import { Fragment } from "react";

import Intro from "@/components/app/Intro";
import About from "@/components/app/About";
import Header from "@/components/app/Header";
import Experience from "@/components/app/Experience";
import Projects from "@/components/app/Projects";
import Contact from "@/components/app/Contact";
import Footer from "@/components/app/Footer";
import SideLiner from "@/components/app/SideLiner";

export default function Page() {
  return (
    <Fragment>
      <Header />
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <SideLiner />
    </Fragment>
  );
}