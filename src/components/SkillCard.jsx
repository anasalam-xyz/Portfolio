import { useInView } from "../hooks/useInView";

export default function SkillCard({ name, Icon, delay = 0 }) {
    const [ref, isVisible] = useInView();
    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transition-all duration-700 ease-out
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <div className="flex items-center gap-3 p-5 rounded-xl border bg-white/60 backdrop-blur hover:shadow-md transition">
                <Icon className="text-lg md:text-xl text-gray-800" />
                <span className="font-medium">{name}</span>
            </div>
        </div>
    );
}