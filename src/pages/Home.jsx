import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

export default function Home() {
    return (
        <div className="py-12 px-6 md:px-34 flex flex-col gap-16 md:gap-16">
            <Hero/>
            <About/>
            <Skills/>
            <Projects/>
        </div>
    );
}