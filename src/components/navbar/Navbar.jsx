import { useEffect, useState } from "react";
import "./navbar.css"

function Navbar() {
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const handleScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight / 2;

            sections.forEach((section) => {
                if (
                    scrollPos >= section.offsetTop &&
                    scrollPos < section.offsetTop + section.offsetHeight
                ) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="header h-16 fixed top-1 left-1/2 w-[80%] border-2 border-white flex justify-center transform -translate-x-1/2 backdrop-blur-md rounded-4xl shadow-xl z-10">
            <nav className="flex flex-row w-full justify-between items-center px-8">
                <img src="/mada_flag.jpg" alt="mada_flag_img" className="h-auto w-[50px]" />
                <ul className="h-full flex justify-center items-center gap-6 text-white text-xl font-semibold">
                    <li className={`h-[80%] flex flex-row justify-center items-center gap-2 px-4 rounded-xs ${activeSection === "hero" ? "bg-white/10 border-b-1" : ""}`}>
                        <i className="fa-solid fa-house"></i>
                        <a href="#hero">Hero</a>
                    </li>
                    <li className={`h-[80%] flex flex-row justify-center items-center gap-2 px-4 rounded-xs ${activeSection === "about" ? "bg-white/10 border-b" : ""}`}>
                        <i className="fa-solid fa-circle-info"></i>
                        <a href="#about">About</a>
                    </li>
                    <li className={`h-[80%] flex flex-row justify-center items-center gap-2 px-4 rounded-xs ${activeSection === "education" ? "bg-white/10 border-b" : ""}`}>
                        <i className="fa-solid fa-graduation-cap"></i>
                        <a href="#education">Education</a>
                    </li>
                    <li className={`h-[80%] flex flex-row justify-center items-center gap-2 px-4 rounded-xs ${activeSection === "skills" ? "bg-white/10 border-b" : ""}`}>
                        <i className="fa-solid fa-code"></i>
                        <a href="#skills">Skills</a>
                    </li>
                    <li className={`h-[80%] flex flex-row justify-center items-center gap-2 px-4 rounded-xs ${activeSection === "project" ? "bg-white/10 border-b" : ""}`}>
                        <i className="fa-solid fa-folder-closed"></i>
                        <a href="#project">Projects</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;