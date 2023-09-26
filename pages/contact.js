import React from "react";
import { useRef } from "react";
import style from "../styles/Contact.module.css"
import emailjs from "@emailjs/browser";
import Footer from "../components/navbar/Footer";
import Navbar from "@/components/navbar/Navbar";
import Contact from "@/components/contact/Contact";

export default function ContactForm() {
    const form = useRef();

    function sendEmails(s) {
        s.preventDefault();

        emailjs
            .sendForm(
                "service_ncjosjh",
                "template_g2map2x",
                form.current,
                "X47ZhVrPjj8UnlFYV"
            )
        // .then(
        //     (result) => {
        //         notify("success", "E-mail sent");
        //         location.reload(false);
        //     },
        //     (error) => {
        //         notify("error", "E-mail not sent");
        //     }
        // );
        s.target.reset();
    }

    const notify = React.useCallback((type, message) => {
        toast({ type, message });
    }, []);

    return (
        <>
            <Navbar />
            <form className={style["contact"]} onSubmit={sendEmails} ref={form}>
                <h1 className="text-2xl font-bold dark:text-white">
                    Contact Us!
                </h1>
                <br />

                <label
                    htmlFor="fullname"
                    className="text-white-500 font-light mt-8 dark:text-gray-50"
                >
                    Full name
                    <span className="text-red-500"> *</span>
                </label>
                <div className={style["contact-fields"]}>
                    <input type="text" name="fullname" required />
                </div>
                <label
                    htmlFor="email"
                    className="text-gray-500 font-light mt-4 dark:text-gray-50"
                >
                    E-mail <span className="text-red-500">*</span>
                </label>
                <div className={style["contact-fields"]}>
                    <input type="email" name="email" required />
                </div>
                <label
                    htmlFor="subject"
                    className="text-gray-500 font-light mt-4 dark:text-gray-50"
                >
                    Subject <span className="text-red-500">*</span>
                </label>
                <div className={style["contact-fields"]}>
                    <input type="text" name="subject" required />
                </div>
                <label
                    htmlFor="message"
                    className="text-gray-500 font-light mt-4 dark:text-gray-50"
                >
                    Message <span className="text-red-500">*</span>
                </label>
                <div className={style["contact-fields"]}>
                    <textarea name="message" required></textarea>
                </div>
                <br />
                <div className={style["contactb"]}>
                    <button type="submit">
                        Submit
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="text-cyan-500 ml-2"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </div>
            </form>
            <Contact />
            <Footer />
        </>
    );
}