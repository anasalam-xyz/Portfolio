import { SiReact, SiExpress, SiMongodb, SiPython, SiTailwindcss, SiRedux } from "react-icons/si";
import { FaJava, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { FiLink } from "react-icons/fi";
import SkillCard from "./SkillCard";

export default function Skills() {
    const skills = [
        { name: "React", icon: SiReact },
        { name: "Express", icon: SiExpress },
        { name: "MongoDB", icon: SiMongodb },
        { name: "JavaScript", icon: IoLogoJavascript },
        { name: "NodeJS", icon: FaNodeJs },
        { name: "TailwindCSS", icon: SiTailwindcss },
        { name: "REST API", icon: FiLink },
        { name: "Git", icon: FaGitAlt },
        { name: "Github", icon: FaGithub },
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt },
        { name: "Java", icon: FaJava },
        { name: "Python", icon: SiPython },
        { name: "MySQL", icon: GrMysql },
        { name: "Redux", icon: SiRedux },
    ];
    return (
        <section id="skills" className="w-full flex flex-col gap-6 px-4 md:px-10 py-4">
            <span className="flex-1 min-w-[40px] h-[3px] bg-gradient-to-r from-gray-800/30 to-gray-800"></span>
            <h3 className="relative flex items-center whitespace-nowrap font-black text-xl md:text-3xl gap-3">
                <span className="before:block before:h-[2px] before:w-16 
             before:bg-gradient-to-r before:from-black before:to-transparent"></span>
                Technologies
                <span className="text-gray-600 font-black text-xl md:text-3xl">/ Stack</span>
                <span className="before:block before:h-[2px] before:w-16 
             before:bg-gradient-to-l before:from-black before:to-transparent"></span>
            </h3>
            <p className="text-gray-600 max-w-3xl text-base md:text-base">
                I work with a mix of front-end and back-end technologies to build
                scalable, responsive, and maintainable web applications. Here are
                some of the tools and frameworks I frequently use:
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.map((skill, i) => (
                        <SkillCard
                            key={skill.name}
                            name={skill.name}
                            Icon={skill.icon}
                            delay={i * 100}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
