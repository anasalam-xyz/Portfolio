export default function Hero() {
    return (
        <div className="w-full flex flex-row justify-between">
            <div>
                <div className="flex items-center gap-2 bg-gray-100 text-gray-700 rounded-full px-4 py-2 w-fit">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    <span className="text-sm font-light">Available for work</span>
                </div>
                <div className="my-4 md:my-12">
                    <div className="text-6xl md:text-8xl font-extrabold tracking-tight">
                        Anas
                    </div>
                    <div className="mt-4 text-6xl md:text-8xl font-extrabold text-gray-800 tracking-tight">
                        Alam
                    </div>
                </div>
                <div className="py-2 flex items-center gap-4 w-full md:w-[40%]">
                    <span className="flex-1 min-w-[40px] h-[2px] bg-gray-800"></span>
                    <span className="whitespace-nowrap font-medium text-xl md:text-2xl">
                        FULL STACK DEVELOPER
                    </span>
                    <span className="flex-1 min-w-[40px] h-[2px] bg-gray-800"></span>
                </div>
                <p className="w-full md:w-[70%] text-base md:text-lg text-gray-600">Building clean, reliable web applications with a focus on usability and performance. </p>
            </div>
            <div className="hidden md:flex flex-col gap-6 text-sm text-gray-500 self-end">
                <a href="https://linkedin.com" className="hover:text-black transition-colors">
                    <span className="vertical-text">LinkedIn</span>
                </a>
                <a href="https://github.com" className="hover:text-black transition-colors">
                    <span className="vertical-text">GitHub</span>
                </a>
                <a href="mailto:you@email.com" className="hover:text-black transition-colors">
                    <span className="vertical-text">Mail</span>
                </a>
            </div>
        </div>
    );
}