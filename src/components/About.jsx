export default function About() {
    return (
        <section id="about" className="mt-10 md:mt-20 w-full flex flex-col gap-4">
            <span className="flex-1 min-w-[40px] h-[3px] bg-gradient-to-r from-gray-800/30 to-gray-800"></span>
            <h3 className="relative flex items-center whitespace-nowrap font-black text-xl md:text-2xl gap-3">
                <span className="before:block before:h-[2px] before:w-16 
                   before:bg-gradient-to-r before:from-black before:to-transparent"></span>
                About Me
                <span className="before:block before:h-[2px] before:w-16 
                   before:bg-gradient-to-l before:from-black before:to-transparent"></span>
            </h3>
            <p className="">
                I’m someone who enjoys understanding how things work and improving them piece by piece.
                I like clarity, structure, and doing things with intention.
                Over time, that mindset pulled me toward technology —
                where I now build web applications that are clean, reliable, and easy to use.
            </p>
            <div className="my-6 flex flex-col md:flex-row justify-between">
                <div className="md:w-[50%]">
                    <h3 className="text-2xl md:text-4xl font-black">Full Stack</h3>
                    <h3 className="text-gray-800 text-2xl md:text-4xl font-black">Developer</h3>
                    <p className="px-4 my-6 border-l-4 border-gray-700">
                        I build web applications that are seamless and intuitive.
                        I focus on performance, clean code, and robust backend systems using technologies like React and Node.js.
                    </p>
                </div>
                <div className="md:w-[50%] px-6 flex flex-col justify-between">
                    <div className="px-2 md:px-10 grid grid-cols-3 gap-2 md:gap-4">
                        <div className="text-gray-800 text-sm px-1 py-2 rounded-lg border border-gray-400 text-center shadow-sm hover:border-gray-700 hover:shadow-md transition-shadow duration-200">
                            React
                        </div>
                        <div className="text-gray-800 text-sm px-2 py-2 rounded-lg border border-gray-400 text-center shadow-sm hover:border-gray-700 hover:shadow-md transition-shadow duration-200">
                            Express
                        </div>
                        <div className="text-gray-800 text-sm px-2 py-2 rounded-lg border border-gray-400 text-center shadow-sm hover:border-gray-700 hover:shadow-md transition-shadow duration-200">
                            MongoDB
                        </div>
                        <div className="text-gray-800 text-sm px-2 py-2 rounded-lg border border-gray-400 text-center shadow-sm hover:border-gray-700 hover:shadow-md transition-shadow duration-200">
                            RestAPI
                        </div>
                        <div className="text-gray-800 text-sm px-2 py-2 rounded-lg border border-gray-400 text-center shadow-sm hover:border-gray-700 hover:shadow-md transition-shadow duration-200">
                            Java
                        </div>
                        <div className="text-gray-800 text-sm px-2 py-2 rounded-lg border border-gray-400 text-center shadow-sm hover:border-gray-700 hover:shadow-md transition-shadow duration-200">
                            Python
                        </div>
                    </div>
                    <div className="my-4 text-end w-full px-4 py-4 bg-gradient-to-l from-gray-100 to-white p-6 text-white border-r border-gray-400">
                        <p className="text-gray-600">Based In</p>
                        <p className="text-gray-800">Ranchi, Jharkhand</p>
                    </div>
                </div>
            </div>
        </section>
    );
}