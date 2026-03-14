import TechItem from "./TechItem";
import "./skills.css"
import html5Icon from "../../assets/icons/HTML5.png"
import cssIcon from "../../assets/icons/CSS3.png"
import jsIcon from "../../assets/icons/JavaScript.png"
import reactIcon from "../../assets/icons/React.png"
import nodeIcon from "../../assets/icons/Node.js.png"
import javaIcon from "../../assets/icons/Java.png"
import postgresqlIcon from "../../assets/icons/PostgreSQL.png"
import springIcon from "../../assets/icons/Spring.png"
import gitIcon from "../../assets/icons/Git.png"
import gitHubIcon from "../../assets/icons/GitHub.png"

function Skills() {

    const techs = [
        { name: "HTML5", icon: html5Icon },
        { name: "CSS3", icon: cssIcon },
        { name: "JavaScript", icon: jsIcon },
        { name: "NodeJs", icon: nodeIcon },
        { name: "Java", icon: javaIcon },
        { name: "PostgreSQL", icon: postgresqlIcon },
        { name: "React", icon: reactIcon },
        { name: "Spring boot", icon: springIcon },
        { name: "Git", icon: gitIcon },
        { name: "GitHub", icon: gitHubIcon },
    ];


    return (
        <section id="skills" className="skills-section max-lg:px-[5%] flex flex-col gap-12 px-[10%] py-24">
            <h2 className="text-white text-4xl font-semibold">TECHNOLOGIES I HAVE WORKED WITH</h2>
            <div className="infinite-carousel max-lg:py-6 relative py-14">
                <div className="shadow-left absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
                <div className="shadow-right absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black/50 to-transparent z-10"></div>
                <div className="scroll-container overflow-x-hidden w-[100%]">
                    <div className="scroll-track w-max flex flex-row items-center gap-8">
                        {techs.map((tech, index) => (
                            <TechItem key={index} name={tech.name} icon={tech.icon} />
                        ))}
                        {techs.map((tech, index) => (
                            <TechItem key={index} name={tech.name} icon={tech.icon} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;