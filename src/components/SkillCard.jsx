
export default function SkillCard({ name, Icon, delay = 0, isVisible }) {
    return (
        <div style={{ transitionDelay: `${delay}ms` }}
            className={`transition-opacity transition-transform duration-500 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div className="flex items-center gap-3 p-5 rounded-xl border border-gray-600 hover:border-gray-700 bg-white/60 hover:shadow-xl text-sm md:text-base transition-shadow transition-border">
                <Icon className="text-lg md:text-xl text-gray-800" />
                <span className="font-medium">{name}</span>
            </div>
        </div>
    );
}