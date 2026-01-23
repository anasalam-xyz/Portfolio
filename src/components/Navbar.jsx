import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <nav className="top-0 sticky px-4 md:px-10 py-2 md:py-4 flex flex-row items-center justify-between shadow-sm border-b border-gray-100">
            <div className="h-full py-1 flex flex-col justify-center">
                <span className="font-black text-lg md:text-xl">
                    <a href="#home">Anas Alam</a>
                </span>
                <span className="text-gray-500 text-xs">
                    Full Stack Developer
                </span>
            </div>
            <div className="px-4 h-full">
                <ul className="hidden mx-1 md:flex flex-row gap-12 items-center justify-between text-sm font-thin text-gray-700">
                    <li><a className="relative inline-block hover:text-black transition-colors duration-300 after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0" href="#about">About</a></li>
                    <li><a className="relative inline-block hover:text-black transition-colors duration-300 after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0" href="#skills">Skills</a></li>
                    <li><a className="relative inline-block hover:text-black transition-colors duration-300 after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0" href="#projects">Projects</a></li>
                    <li><a className="relative inline-block hover:text-black transition-colors duration-300 after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0" href="#contact">Connect</a></li>
                </ul>
                {isOpen || (<svg onClick={()=>setIsOpen(true)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="md:hidden size-5">
                    <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                </svg>)}
                {isOpen && (<svg onClick={()=>setIsOpen(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="md:hidden size-5">
                    <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                </svg>)}
            </div>
        </nav>
        {isOpen && (
            <div className="px-8 absolute left-0 w-full bg-white border-b border-gray-100 md:hidden shadow-sm border-b border-gray-100">
                <ul className="text-base font-thin text-gray-700">
                    <li><a className="my-4 relative inline-block hover:text-black transition-colors duration-300 after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0" onClick={()=>setIsOpen(false)} href="#about">About</a></li>
                    <li><a className="my-4 relative inline-block hover:text-black transition-colors duration-300 after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0" onClick={()=>setIsOpen(false)} href="#skills">Skills</a></li>
                    <li><a className="my-4 relative inline-block hover:text-black transition-colors duration-300 after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0" onClick={()=>setIsOpen(false)} href="#projects">Projects</a></li>
                    <li><a className="my-4 relative inline-block hover:text-black transition-colors duration-300 after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0" onClick={()=>setIsOpen(false)} href="#contact">Connect</a></li>
                </ul>
            </div>
        )}
        </>
    );
}