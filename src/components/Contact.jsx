import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";

export default function Contact() {
    return (
        <section id="connect" className="w-full flex flex-col gap-6 py-4">
            <span className="flex-1 min-w-[40px] h-[3px] bg-gradient-to-r from-gray-800/30 to-gray-800"></span>
            <h3 className="relative flex items-center whitespace-nowrap font-black text-xl md:text-3xl gap-3">
                <span className="before:block before:h-[2px] before:w-10 md:before-16 
             before:bg-gradient-to-r before:from-black before:to-transparent"></span>
                Connect
                <span className="text-gray-600 font-black text-xl md:text-3xl"> / Get In Touch </span>
                <span className="before:block before:h-[2px] before:w-10 md:before-16 
             before:bg-gradient-to-l before:from-black before:to-transparent"></span>
            </h3>
            <div className="mt-12 md:px-42 flex flex-col md:flex-row gap-8">
                <div className="group w-full md:w-84 inline-flex gap-4 justify-between border border-gray-300 rounded-xl px-4 py-4 hover:border-gray-400 hover:shadow-lg">
                    <a href="https://www.linkedin.com/in/anasalam-xyz/" className="flex items-center justify-center h-12 w-12 rounded-xl bg-gray-800 text-white" target="_blank">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://www.linkedin.com/in/anasalam-xyz/" target="_blank" className="px-2">
                        <p className="my-1 font-bold">LinkedIn</p>
                        <p className="my-1 font-light text-sm text-gray-800">in/anasalam-xyz</p>
                        <p className="mt-3 font-thin text-xs text-gray-600">Connect</p>
                    </a>
                    <FaArrowRight className="text-gray-300 text-xs group-hover:text-gray-800 group-hover:translate-x-1 transition-all duration-300 delay-100" />
                </div>
                <div className="group w-full md:w-84 inline-flex gap-4 justify-between border border-gray-300 rounded-xl px-4 py-4 hover:border-gray-400 hover:shadow-lg">
                    <a href="https://github.com/anasalam-xyz" className="flex items-center justify-center h-12 w-12 rounded-xl bg-gray-800 text-white" target="_blank">
                        <LuGithub />
                    </a>
                    <a href="https://github.com/anasalam-xyz" target="_blank" className="px-2">
                        <p className="my-1 font-bold">Github</p>
                        <p className="my-1 font-light text-sm text-gray-800">github.com/anasalam-xyz</p>
                        <p className="mt-3 font-thin text-xs text-gray-600">Visit</p>
                    </a>
                    <FaArrowRight className="text-gray-300 text-xs group-hover:text-gray-800 group-hover:translate-x-1 transition-all duration-300 delay-100" />
                </div>
            </div>
            <div className="md:mx-42 flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-xl px-4 py-4 hover:shadow-sm">
                <IoChatbubbleOutline className="text-xl" />
                <p className="font-bold text-lg">Quick Message</p>
                <p className="text-sm text-gray-600">Prefer to send a direct message?</p>
                <a href="mailto:anasalam.xyz@gmail.com" className="my-2 bg-gray-900 text-white text-sm rounded-lg px-4 py-3 inline-flex gap-2 items-center hover:bg-black ">
                    <CiMail />
                    Send an Email
                </a>
            </div>
            {/* <img src="https://github-readme-activity-graph.vercel.app/graph?username=anasalam-xyz&theme=github-compact" alt="GitHub activity graph"/> */}
        </section>
    );
}
