import profil from "../../assets/images/Profil.png"
import "./hero.css"

function Hero() {
    return (
        <section id="hero" className="hero-section lg:pt-[150px] max-xl:flex-col max-xl:h-auto max-xl:justify-center max-xl:text-center max-xl:gap-14 h-[100vh] py-24 relative flex flex-row justify-between items-center pl-[10%] pr-[10%]">
            <div className="order-1 max-xl:order-2 max-xl:items-center flex flex-col gap-14">
                <h1 className="content-title max-lg:text-5xl text-6xl text-white font-bold tracking-wide">Hello, I'm Hiraina</h1>
                <p className="text-white font-larger text-2xl mt-4 max-w-[98%]">
                    Full-stack Java developer passionate about creating modern and scalable web applications,
                    using React for the frontend and Spring Boot for the backend.
                </p>
                <div className="buttons max-xl:text-2xl max-xl:flex-col max-xl:justify-center flex flex-row items-center w-full text-3xl text-white flex flex-row gap-5 max-w-[90%]">
                    <a href="#contact" className="contact-button max-xl:gap-1 flex flex-row justify-center items-center gap-4 px-6 py-4 rounded-full">
                        <i className="fa-regular fa-envelope "></i>
                        <span className="font-semibold">Contact me</span>
                    </a>
                    <a href="" className="download-cv-button max-xl:gap-1 flex flex-row justify-center items-center gap-4 px-8 py-4 rounded-full">
                        <i className="fa-solid fa-download"></i>
                        <span className="font-semibold">Download CV</span>
                    </a>
                </div>
            </div>
            <img src={profil} alt="profil_img" className="profil order-2 max-xl:order-1 max-sm:mt-4 max-lg:w-[220px] max-lg:h-[220px] w-[350px] h-[350px] rounded-full border-4 border-white" />
        </section>
    )
}

export default Hero;