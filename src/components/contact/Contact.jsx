import "./contact.css"
import Input from "./Input.jsx"

function Contact() {
    return (
        <section className="contact-section w-[100%] flex flex-row items-center gap-10 px-[10%] py-24 bg-black">
            <div className="contact-box flex-1 flex flex-col justify-center items-start gap-10 text-white">
                <h2 className="contact-box-title text-6xl font-semibold">Contact</h2>
                <p className="text-3xl">Feel free to reach out!</p>
                <ul className="links w-[90%] text-xl text-white font-medium flex flex-col gap-4">
                    <li className="link py-6 rounded-lg">
                        <a href="mailto:hei.hiraina@gmail.com" className="flex flex-row justify-center items-center gap-2">
                            <i className="fa-solid fa-envelope"></i>
                            <span>hei.hiraina@gmail.com</span>
                        </a>
                    </li>
                    <li className="link py-6 rounded-lg">
                        <a href="https://www.linkedin.com/in/hiraina-randriamiarimbola-13a790353" className="flex flex-row justify-center items-center gap-2">
                            <i className="fa-brands fa-linkedin"></i>
                            <span>hiraina-randriamiarimbola</span>
                        </a>
                    </li>
                    <li className="link py-6 rounded-lg">
                        <a href="https://www.github.com/Hiraina-RND" className="flex flex-row justify-center items-center gap-2">
                            <i className="fa-brands fa-github"></i>
                            <span>github.com/Hiraina-RND</span>
                        </a>
                    </li>
                </ul>
            </div>
            <form className="form text-white flex-1 flex flex-col gap-8 py-8 items-center rounded-2xl">
                <h2 className="text-4xl">Send me a message</h2>
                <Input type="text" placeholder="Your name"/>
                <Input type="email" placeholder="Your email(example@gmail.com)" />
                <Input type="text" placeholder="Subject" />
                <textarea
                    name="contact-textarea"
                    id="contact-textarea"
                    className="w-[90%] py-10 px-6 rounded-lg"
                    placeholder="Your message here ..."
                ></textarea>
                <button type="submit" className="submit-btn flex flex-row justify-center items-center gap-4 font-medium text-xl w-[90%] py-4 rounded-lg">
                    <i className="fa-solid fa-paper-plane"></i>
                    <span>Send message</span>
                </button>
            </form>
        </section>
    )
}

export default Contact;