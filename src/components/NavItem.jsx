export default function NavItem({ name, active }) {
    return (
        <li>
            <a href={`#${name.toLowerCase()}`} className={`
                relative inline-block transition-colors duration-300
                ${active ? "text-black font-medium" : "text-gray-600 font-normal hover:text-black"}
                after:content-[''] after:absolute after:-bottom-1 after:h-[2px] after:bg-gray-600
                after:transition-all after:duration-300
                ${ active ? "after:w-full after:left-0" : "after:w-0 after:left-1/2 hover:after:w-full hover:after:left-0"}
            `}>
                {name}
            </a>
        </li>

    );
}