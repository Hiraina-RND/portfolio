import "./techItem.css"

function TechItem({ name, icon }) {
    return (
        <div className="tech-item max-lg:h-[90px] max-lg:w-[90px] max-lg:p-8 h-[120px] w-[120px] flex flex-col items-center justify-center gap-2 shadow-lg p-10 rounded-full">
            {icon && <img src={icon} alt={name} className="tech-icon h-[60px] w-[60px]" />}
            <span className="text-white text-xs font-semibold">{name}</span>
        </div>
    )
}

export default TechItem;