import { IoMdLink } from "react-icons/io";
import { LuGithub } from "react-icons/lu";

export default function ProjectCard({ colSpan, src, alt, name, description, demo, gitRepo, tech, fallbackImg }) {
    return (
        <div className={`group my-2 border border-gray-200 rounded-md col-span-${colSpan} hover:-translate-y-1 hover:shadow-lg transition-all duration-400`}>
            <div className="pt-4 bg-gray-50 px-4 flex flex-row flex-wrap">
                {tech.map((tech, index) => (
                    <div className="bg-gray-100 border border-gray-100 text-gray-700 font-thin py-1 px-2 text-xs rounded-lg mx-2 " key={index}>{tech}</div>
                ))}
            </div>
            <div className="py-4 bg-gray-50 flex items-center justify-center">
                <img className="w-[85%] h-[80%] object-cover mx-4 my-4 bg-gray-50 group-hover:w-full transition-all duration-300" src={src} atl={alt} />
            </div>
            <h4 className="px-4 mt-6 md:mt-12 group-hover:mt-10 text-lg font-bold transition-all duration-200">{name}</h4>
            <p className="px-4 my-4 text-gray-700 text-sm">{description}</p>
            <div className="px-4 flex flex-row gap-2 mb-4">
                <a href={gitRepo} className="inline-flex gap-1 text-xs px-2 py-2 bg-gray-900 rounded-sm text-white items-center hover:bg-black" target="_blank">
                    <LuGithub className="text-white"/>
                    Code
                </a>
                {demo && (
                    <a href={demo} className="inline-flex gap-1 px-4 py-2 text-xs rounded-sm border border-gray-300 items-center hover:border-gray-400" target="_blank">
                        <IoMdLink/>
                        Live
                    </a>
                )}
            </div>
        </div>
    );
}