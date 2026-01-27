import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

export default function Home() {
    return (
        <div className="py-12 px-10 md:px-20 lg:px-34 flex flex-col gap-4 md:gap-16">
            <Hero/>
            <About/>
            <Skills/>
            <Projects/>
            <Experience/>
            <Contact/>
        </div>
    );
}