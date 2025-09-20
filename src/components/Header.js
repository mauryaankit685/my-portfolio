import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-600 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 text-2xl font-bold">
                        <Link to="/">🚀 My Portfolio</Link>
                    </div>

                    {/* for desktop  */}
                    <div className="hidden md:flex space-x-6">
                        <NavLink to="/" className={({ isActive }) =>
                            isActive
                                ? "text-yellow-300 font-semibold"
                                : "hover:text-gray-200"
                        }>Home</NavLink>
                        <NavLink to="/about" className={({ isActive }) =>
                            isActive
                                ? "text-yellow-300 font-semibold"
                                : "hover:text-gray-200"
                        }>About</NavLink>
                        <NavLink to="/contact" className={({ isActive }) =>
                            isActive
                                ? "text-yellow-300 font-semibold"
                                : "hover:text-gray-200"
                        }>Contact</NavLink>
                        <NavLink to="/login" className={({ isActive }) =>
                            isActive
                                ? "text-yellow-300 font-semibold"
                                : "hover:text-gray-200"
                        }>Login</NavLink>
                    </div>

                    {/* For Mobile  */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="focus:outline-none"
                        >
                            {isOpen ? (
                                <span className="text-3xl">✖</span>
                            ) : (
                                <span className="text-3xl">☰</span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2 bg-blue-700">
                    <Link to="/" className="block hover:text-gray-200">Home</Link>
                    <Link to="/about" className="block hover:text-gray-200">About</Link>
                    <Link to="/contact" className="block hover:text-gray-200">Contact</Link>
                    <Link to="/login" className="block hover:text-gray-200">Login</Link>
                </div>
            )}
        </nav>
    );
}
