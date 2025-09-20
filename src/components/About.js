import React from "react";
import myPhoto from "../assets/myphoto.jpg";
import Header from "./Header";
import Footer from "./Footer";

function About() {
    return (
        <div>
            <Header></Header>
            <section id="about" className="bg-gray-50 py-20 px-6 md:px-20 ">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">

                    {/* my phot */}
                    <div className="flex-shrink-0">
                        <img
                            src={myPhoto}
                            alt="Ankit Maurya"
                            className="w-56 h-56 md:w-72 md:h-72 rounded-2xl object-cover border-4 border-blue-600 shadow-lg"
                        />
                    </div>

                    {/*  Details about me */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            I am a proactive <span className="font-semibold">Application Developer</span> with
                            <span className="font-semibold"> 4.5 years of experience</span>, specializing in
                            <span className="font-semibold"> ReactJS, JavaScript, and modern web technologies</span>.
                            My focus is on building efficient, scalable, and user-friendly applications.
                            Currently, I am working as an <b>Application Developer</b> at <b>MetrixLab a Toluna company</b>.
                        </p>

                        {/* My Skills */}
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Technical Skills</h3>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                            <li className="bg-white shadow p-3 rounded-md text-center">ReactJS</li>
                            <li className="bg-white shadow p-3 rounded-md text-center">Redux Toolkit</li>
                            <li className="bg-white shadow p-3 rounded-md text-center">JavaScript (ES6+)</li>
                            <li className="bg-white shadow p-3 rounded-md text-center">jQuery</li>
                            <li className="bg-white shadow p-3 rounded-md text-center">HTML5</li>
                            <li className="bg-white shadow p-3 rounded-md text-center">CSS3</li>
                            <li className="bg-white shadow p-3 rounded-md text-center">Tailwind CSS</li>
                        </ul>

                        {/* Achievements */}
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Achievements</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                            <li>🏆 Appreciation Award for on-time project delivery with 100% error-free execution.</li>
                            <li>🌟 Best Performance Team Player (2022-23).</li>
                        </ul>

                        {/* Education */}
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Education</h3>
                        <p className="text-gray-700 mb-1">
                            🎓 B.E. in Information Technology - Indira Gandhi Engineering College, Sagar (CGPA: 7.35)
                        </p>
                        <p className="text-gray-700">📖 12th: 79.2% | 10th: 74.5%</p>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
}

export default About;
