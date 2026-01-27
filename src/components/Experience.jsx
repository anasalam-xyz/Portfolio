import {GitHubCalendar} from "react-github-calendar";
import { FaGithub } from "react-icons/fa6";

export default function Experience() {
    return (
        <div className="lg:mx-36 py-4 px-4 border border-gray-300 rounded-md hover:shadow-sm">
            <div className="flex flex-row gap-4 mb-4">
                <div className="flex items-center justify-center rounded-full bg-gray-800 h-8 w-8">
                    <FaGithub className="h-[50%] w-[50%] text-white"/>
                </div>
                <div>
                    <span className="font-bold text-sm md:text-base">Github Activity</span>
                    <span className="px-2 md:px-4 font-light text-gray-600 text-xs md:text-sm">@anasalam-xyz</span>
                    <p className="font-thin text-gray-700 text-xs">Contributions in the last year</p>
                </div>
            </div>
            <GitHubCalendar
                username="anasalam-xyz"
                blockSize={12}
                blockMargin={4}
                fontSize={10}
            />
        </div>
    );
}