import { useEffect, useState } from "react";
import NavItem from "./NavItem";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState("");
    const sections = ["home","about", "skills", "projects", "connect"];
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-50% 0px -50% 0px", // center of screen - testing ig
            }
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <nav className="font-sans bg-white z-10 top-0 sticky px-4 md:px-10 py-2 md:py-4 flex flex-row items-center justify-between shadow-sm border-b border-gray-100">
                <div className="h-full py-1 flex flex-col justify-center">
                    <span className="font-bold text-lg md:text-xl">
                        <a href="#">Anas Alam</a>
                    </span>
                    <span className="text-gray-500 text-xs">
                        Full Stack Developer
                    </span>
                </div>
                <div className="px-4 h-full">
                    <ul className="hidden mx-1 md:flex flex-row gap-12 items-center justify-between text-sm font-light text-gray-700">
                        <NavItem name="Home" active={active==="home"}/>
                        <NavItem name="About" active={active==="about"}/>
                        <NavItem name="Skills" active={active==="skills"}/>
                        <NavItem name="Projects" active={active==="projects"}/>
                        <NavItem name="Connect" active={active==="connect"}/>
                    </ul>
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden relative w-6 h-4">
                        <span className={`absolute w-5 h-[2px] bg-black transition-all duration-800 ${isOpen ? "-rotate-135 top-2" : "top-0"}`}></span>
                        <span className={`absolute w-5 h-[2px] bg-black transition-opacity duration-700 ${isOpen ? "opacity-0" : "top-2"}`}></span>
                        <span className={`absolute w-5 h-[2px] bg-black transition-all duration-800 ${isOpen ? "-rotate-45 top-2" : "top-4"}`}></span>
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className="z-9 bg-white px-8 fixed top-16 left-0 w-full bg-white border-b border-gray-100 md:hidden shadow-sm border-b border-gray-100">
                    <ul className="py-8 flex flex-col justify-around gap-6 text-base font-thin text-gray-700">
                        <NavItem name="Home" active={active==="home"}/>
                        <NavItem name="About" active={active==="about"}/>
                        <NavItem name="Skills" active={active==="skills"}/>
                        <NavItem name="Projects" active={active==="projects"}/>
                        <NavItem name="Connect" active={active==="connect"}/>
                    </ul>
                </div>
            )}
        </>
    );
}