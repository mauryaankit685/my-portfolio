import React from "react";
import myPhoto from "../assets/myphoto.jpg";
import resume from "../assets/MyResume.pdf";
import jsLogo from "../assets/js.png";
import redux from "../assets/redux.png";
function Body() {
    return (
        <main className="px-6 md:px-20 py-10 bg-gray-50">

            <section className="flex flex-col md:flex-row items-center justify-center md:justify-between py-12">

                <div className="text-center md:text-left max-w-xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                        Hi, I'm Ankit Maurya👋
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        A Frontend Developer passionate about building modern, responsive web apps using React, Redux Toolkit, JavaScript and Tailwind.
                    </p>
                    <a
                        href={resume}
                        className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Download Resume
                    </a>
                </div>

                <div className="mt-8 md:mt-0 md:ml-12">
                    <img
                        src={myPhoto}
                        alt="Ankit Maurya"
                        className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-blue-600 shadow-lg object-cover"
                    />
                </div>
            </section>

            <section className="py-16">
                <h2 className="text-3xl font-bold text-center text-gray-800">Skills</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">

                    <SkillCard
                        title="React"
                        img="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                        bg="bg-blue-100"
                        description="Building dynamic and reusable UI components with modern React."
                    />

                    <SkillCard
                        title="Redux Toolkit"
                        img={redux}
                        bg="bg-purple-100"
                        description="State management made simple and scalable for React apps."
                    />

                    <SkillCard
                        title="JavaScript"
                        img={jsLogo}
                        bg="bg-yellow-100"
                        description="Writing clean, efficient, and modern ES6+ code for the web."
                    />
                    <SkillCard
                        title="jQuery"
                        img="https://cdn.worldvectorlogo.com/logos/jquery-1.svg"
                        bg="bg-blue-50"
                        description="Simplifying DOM manipulation with jQuery."
                    />

                    <SkillCard
                        title="HTML"
                        img="https://cdn.worldvectorlogo.com/logos/html-1.svg"
                        bg="bg-orange-100"
                        description="Structuring web pages with semantic HTML5."
                    />

                    <SkillCard
                        title="CSS"
                        img="https://cdn.worldvectorlogo.com/logos/css-3.svg"
                        bg="bg-blue-200"
                        description="Designing responsive layouts and animations with CSS3."
                    />

                </div>
            </section>
        </main>
    );
}

// Skill Cards
function SkillCard({ title, img, bg, description }) {
    return (
        <div
            className="
        relative p-6 bg-white rounded-xl shadow-md text-center
        cursor-pointer overflow-hidden group
        transition-transform duration-300
        hover:scale-105
      "
        >
            <span
                className="
          absolute inset-0 border-2 border-blue-400 rounded-xl
          opacity-0 group-hover:opacity-100
          animate-none group-hover:animate-borderReveal
        "
            ></span>

            <div className="relative z-10">
                <div className="flex justify-center mb-4">
                    <div className={`w-20 h-20 flex items-center justify-center ${bg} rounded-full`}>
                        <img src={img} alt={title} className="w-12 h-12" />
                    </div>
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-gray-600">{description}</p>
            </div>
        </div>
    );
}


export default Body;
