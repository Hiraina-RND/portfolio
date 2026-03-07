import profil from "../assets/images/profil.jpg"
import "./hero.css"

function Hero() {
    return (
        <section className="pt-[200px] relative flex flex-row justify-between items-center ml-[10%] mr-[10%]">
            <div className="content flex flex-col gap-10">
                <h1 className="content-title text-5xl text-white font-semibold tracking-widest">Hello, I'm Hiraina ...</h1>
                <p className="text-white text-2xl mt-4 max-w-[90%]">
                    Full-stack Java developer, passionate about building modern web applications with React and Spring Boot.
                </p>
                <div className="buttons w-full text-xl text-white flex flex-row gap-8 max-w-[90%]">
                    <button className="contact-button flex-1 flex flex-row justify-center items-center gap-4 py-4 rounded-full">
                        <i class="fa-regular fa-envelope "></i>
                        <span className="font-semibold">contact me</span>
                    </button>
                    <button className="download-cv-button flex-1 flex flex-row justify-center items-center gap-4 py-4 rounded-full">
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