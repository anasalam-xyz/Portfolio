import Hero from "../components/Hero";
import About from "../components/About";

export default function Home() {
    return (
        <div className="py-12 px-6 md:px-34 flex flex-col gap-50">
            <Hero/>
            <About/>
        </div>
    );
}