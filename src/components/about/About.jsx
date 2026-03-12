import theMan from "../../assets/images/about_img.png"
import "./about.css"

function About() {
    return (
        <section className="about-section flex flex-col gap-12 mx-[10%] h-auto px-24 py-10 rounded-2xl">
            <h2 className="title text-4xl text-white font-semibold pt-6">ABOUT</h2>
            <div className="content flex flex-row items-center gap-24">
                <img src={theMan} alt="the_man.png" className="h-[400px]" />
                <ul className="content-items mr-[10%] text-white flex flex-col gap-16">
                    <li className="flex flex-row items-center gap-16">
                        <i className="fa-solid fa-user text-6xl"></i>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-2xl font-bold">About Me</h3>
                            <p className="text-lg">
                                I’m a computer science student and a full-stack Java developer. I enjoy building modern web applications
                                using React for the frontend and Spring Boot for the backend.
                            </p>
                        </div>
                    </li>
                    <li className="flex flex-row items-center gap-11">
                        <i className="fa-solid fa-code text-6xl"></i>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-2xl font-bold">What I Do</h3>
                            <p className="text-lg">
                                I develop full-stack applications by creating user interfaces, building REST APIs, and connecting them to databases.
                                I like understanding how each part of an application works together.
                            </p>
                        </div>
                    </li>
                    <li className="flex flex-row items-center gap-16">
                        <i className="fa-solid fa-rocket text-6xl"></i>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-2xl font-bold">My Goal</h3>
                            <p className="text-lg">
                                My goal is to keep improving my skills, learn new technologies,
                                and build useful applications while growing as a developer.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About;