import { useState } from "react";
import "./contact.css"
import Input from "./Input.jsx"

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const body = `Bonjour,\n\n${formData.message}\n\nCordialement,\n${formData.name}`;
        const gmailLink = `https://mail.google.com/mail/?view=cm&to=hei.hiraina@gmail.com&su=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;

        window.open(gmailLink, "_blank");

        setFormData({ name: "", subject: "", message: "" });
    };

    return (
        <section id="contact" className="contact-section max-lg:px-[5%] max-lg:flex-col w-[100%] flex flex-row items-center gap-10 px-[10%] py-24">
            <div className="contact-box max-lg:w-full flex-1 flex flex-col justify-center items-start gap-10 text-white">
                <h2 className="contact-box-title text-6xl font-semibold">Contact</h2>
                <p className="text-3xl">Feel free to reach out!</p>
                <ul className="links max-lg:w-full w-[90%] text-xl text-white font-medium flex flex-col gap-4">
                    <li className="link max-sm:pl-4 py-6 rounded-lg flex justify-start pl-8">
                        <a
                            href="mailto:hei.hiraina@gmail.com"
                            className="flex flex-row justify-center items-center gap-2"
                        >
                            <i className="fa-solid fa-envelope"></i>
                            <span className="max-sm:text-lg">hei.hiraina@gmail.com</span>
                        </a>
                    </li>
                    <li className="link max-sm:pl-4 py-6 rounded-lg flex justify-start pl-8">
                        <a
                            href="https://www.github.com/Hiraina-RND"
                            target="_blank"
                            className="flex flex-row justify-center items-center gap-2"
                        >
                            <i className="fa-brands fa-github"></i>
                            <span className="max-sm:text-lg">github.com/Hiraina-RND</span>
                        </a>
                    </li>
                    <li className="link max-sm:pl-4 py-6 rounded-lg flex justify-start pl-8">
                        <a
                            href="https://www.linkedin.com/in/hiraina-randriamiarimbola-13a790353"
                            target="_blank"
                            className="flex flex-row justify-center items-center gap-2"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                            <span className="max-sm:text-lg">hiraina-randria</span>
                        </a>
                    </li>
                </ul>
            </div>
            <form
                className="form max-lg:w-full text-white flex-1 flex flex-col gap-8 py-8 items-center rounded-2xl"
                onSubmit={handleSubmit}
            >
                <h2 className="max-lg:text-2xl text-center text-4xl">Send me a message</h2>
                <Input type="text" placeholder="Your name" name="name" value={formData.name} onChange={handleChange} />
                <Input type="text" placeholder="Subject" name="subject" value={formData.subject} onChange={handleChange} />
                <textarea
                    name="message"
                    id="contact-textarea"
                    className="w-[90%] py-10 px-6 rounded-lg"
                    placeholder="Your message here ..."
                    value={formData.message}
                    onChange={handleChange}
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