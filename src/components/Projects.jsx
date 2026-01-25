
export default function Projects() {
    return (
        <section id="skills" className="w-full flex flex-col gap-6 px-4 md:px-10 py-4">
            <span className="flex-1 min-w-[40px] h-[3px] bg-gradient-to-r from-gray-800/30 to-gray-800"></span>
            <h3 className="relative flex items-center whitespace-nowrap font-black text-xl md:text-3xl gap-3">
                <span className="before:block before:h-[2px] before:w-16 
             before:bg-gradient-to-r before:from-black before:to-transparent"></span>
                Projects
                <span className="text-gray-600 font-black text-xl md:text-3xl"> / Builds </span>
                <span className="before:block before:h-[2px] before:w-16 
             before:bg-gradient-to-l before:from-black before:to-transparent"></span>
            </h3>
        </section>
    );
}
