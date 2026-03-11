import profil from "../../assets/images/Profil.png"
import "./hero.css"

function Hero() {
    return (
        <section className="hero-section h-[100vh] pt-24 relative flex flex-row justify-between items-center pl-[10%] pr-[10%]">
            <div className="content flex flex-col gap-14">
                <h1 className="content-title text-6xl text-white font-bold tracking-wide">Hello, I'm Hiraina</h1>
                <p className="text-white font-larger text-2xl mt-4 max-w-[98%]">
                    Full-stack Java developer passionate about creating modern and scalable web applications,
                    using React for the frontend and Spring Boot for the backend.
                </p>
                <div className="buttons w-full text-3xl text-white flex flex-row gap-5 max-w-[90%]">
                    <button className="contact-button flex flex-row justify-center items-center gap-4 px-6 py-4 rounded-full">
                        <i class="fa-regular fa-envelope "></i>
                        <span className="font-semibold">Contact me</span>
                    </button>
                    <button className="download-cv-button flex flex-row justify-center items-center gap-4 px-8 py-4 rounded-full">
                        <i class="fa-solid fa-download"></i>
                        <span className="font-semibold">Download CV</span>
                    </button>
                </div>
            </div>
            <img src={profil} alt="profil_img" className="profil w-[350px] h-[350px] rounded-full border-4 border-white" />
        </section>
    )
}

export default Hero;