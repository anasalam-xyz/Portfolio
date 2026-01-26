import ProjectCard from "./ProjectCard";
import worknestImg from "../assets/worknest-dashboard.png";
import newsAppImg from "../assets/newsapp-category.jpg";
import notebookAppImg from "../assets/notebook-dashboard.png";
import horrorGameImg from "../assets/horror-story-1.png";
import habitTrackerImg from "../assets/habit-tracker-best-worst.png";

export default function Projects() {
    const projects = [
        {
            colSpan: 1,
            name: "WorkNest",
            description: "A task & project management app with secure auth designed to help individuals and small teams in organizing work. ",
            alt: "WorkNest Screenshot",
            src: worknestImg,
            demo: "https://worknest-teams.vercel.app/",
            gitRepo: "https://github.com/anasalam-xyz/worknest",
            tech: ["React", "Express", "MongoDB"],
            fallbackImg: null 
        },
        {
            colSpan: 1,
            name: "News App",
            description: "A News app made using React with help of newsapi.org's news api.",
            alt: "News App Screenshot",
            src: newsAppImg,
            demo: "",
            gitRepo: "https://github.com/anasalam-xyz/NewsMonkey",
            tech: ["React", "BootStrap"],
            fallbackImg: null 
        },
        {
            colSpan: 1,
            name: "Notebook App",
            description: "A notes app with auth and database which saves notes on cloud.",
            alt: "Notebook App Screenshot",
            src: notebookAppImg,
            demo: "https://inotebook-cc.vercel.app/",
            gitRepo: "https://github.com/anasalam-xyz/inotebook",
            tech: ["React", "Express", "MongoDB"],
            fallbackImg: null
        },
        {
            colSpan: 1,
            name: "Horror Story Game",
            description: "A Story game with Choices that saves progress on localStorage made with React.",
            alt: "Horror Game Screenshot",
            src: horrorGameImg,
            demo: "https://anasalam-xyz.github.io/horror-story-game/",
            gitRepo: "https://github.com/anasalam-xyz/horror-story-game",
            tech: ["React", "TailwindCSS"],
            fallbackImg: null 
        },
        {
            colSpan: 1,
            name: "Habit Tracker",
            description: "A habit tracker that helps you monitor your daily habits, visualize your progress, and understand your consistency patterns. ",
            alt: "Habit Tracker Screenshot",
            src: habitTrackerImg,
            demo: "",
            gitRepo: "https://github.com/anasalam-xyz/Habit-Tracker",
            tech: ["Python"],
            fallbackImg: null 
        },
    ];
    return (
        <section id="projects" className="w-full flex flex-col gap-6 py-4">
            <span className="flex-1 min-w-[40px] h-[3px] bg-gradient-to-r from-gray-800/30 to-gray-800"></span>
            <h3 className="relative flex items-center whitespace-nowrap font-black text-xl md:text-3xl gap-3">
                <span className="before:block before:h-[2px] before:w-16 
             before:bg-gradient-to-r before:from-black before:to-transparent"></span>
                Projects
                <span className="text-gray-600 font-black text-xl md:text-3xl"> / Builds </span>
                <span className="before:block before:h-[2px] before:w-16 
             before:bg-gradient-to-l before:from-black before:to-transparent"></span>
            </h3>
            <div className="my-2 md:my-8 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.name} colSpan={project.colSpan} name={project.name} description={project.description} alt={project.alt} src={project.src} demo={project.demo} gitRepo={project.gitRepo} tech={project.tech} fallbackImg={project.fallbackImg}/>
                ))}
            </div>
        </section>
    );
}
