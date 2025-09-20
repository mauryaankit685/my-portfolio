import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import Header from "./Header";
import Footer from "./Footer";

function Contact() {
    const form = useRef();
    const [status, setStatus] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(

                "service_isb8tmh",   // EmailJS Service ID
                "template_t69788g",  // EmailJS Template ID
                form.current,
                "tzElcwFnlee0lbYIS"   // EmailJS Public Key
            )
            .then(
                () => {
                    setStatus("success");
                    form.current.reset();
                },
                () => {
                    setStatus("error");
                }
            );
    };
    useEffect(() => {
        setTimeout(function () {
            setStatus(null)
        }, 3000)
    }, [status])

    return (
        <div>
            <Header></Header>
            <section id="contact" className="bg-gray-50 py-20 px-6 md:px-20">

                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
                    <p className="text-lg text-gray-600 mb-12">
                        I’d love to connect! Whether you have a question, an opportunity, or just want to say hi,
                        feel free to reach out.
                    </p>

                    {/* Contact Info */}
                    <div className="mb-12 space-y-4">
                        <p className="text-gray-700">
                            📧 <a href="mailto:mauryaankit685@gmail.com" className="text-blue-600 hover:underline">
                                mauryaankit685@gmail.com
                            </a>
                        </p>
                        <p className="text-gray-700">📱 +91 8962485202</p>
                        <p>
                            🏠 Village Sleemnadab, Katni (483440), Madhya Pradesh
                        </p>
                        <p className="text-gray-700">
                            🔗 <a href="https://github.com/mauryaankit685" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                GitHub
                            </a> |
                            <a href="https://www.linkedin.com/in/ankit-maurya-2a0a3b186/" target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-600 hover:underline">
                                LinkedIn
                            </a>
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

                        {/* ✅ Status Alert */}
                        {status === "success" && (
                            <div className="mb-6 p-4 text-green-800 bg-green-100 border border-green-300 rounded-lg">
                                ✅ Message sent successfully!
                            </div>
                        )}
                        {status === "error" && (
                            <div className="mb-6 p-4 text-red-800 bg-red-100 border border-red-300 rounded-lg">
                                ❌ Failed to send. Please try again later.
                            </div>
                        )}


                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            className="bg-white shadow-lg rounded-xl p-8 text-left space-y-6"
                        >
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    required
                                    className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

            </section>
            <Footer></Footer>
        </div>
    );
}

export default Contact;
