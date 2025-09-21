import React, { useState, useEffect } from "react";
import { auth } from "./firebase/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Auth() {
    const [isSignup, setIsSignup] = useState(false);
    const [status, setStatus] = useState(null);
    const navigate = useNavigate();

    // const handleLogout = async () => {
    //     await signOut(auth);
    //     localStorage.removeItem("token");
    //     navigate("/login");

    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const { email, password, name } = Object.fromEntries(formData);

        try {
            if (isSignup) {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                // Save name in Firebase profile

                await updateProfile(userCredential.user, {
                    displayName: name,
                });

                await userCredential.user.reload();
                const token = await userCredential.user.getIdToken();
                localStorage.setItem("token", token);
                setStatus("✅ Account created! Please login.");
                navigate("/products");

            } else {
                // Login
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                const token = await userCredential.user.getIdToken(); // Firebase JWT
                localStorage.setItem("token", token);
                setStatus(" Logged in successfully!");
                navigate("/products");
            }
            e.target.reset();
        } catch (err) {
            setStatus("❌ " + err.message);
        }
    };

    // Auto-hide alert
    useEffect(() => {
        if (status) {
            const timer = setTimeout(() => setStatus(null), 3000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    return (
        <div>
            <Header></Header>
            <section className="flex justify-center items-center min-h-screen bg-gray-100 px-6">
                <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md relative">
                    {/* Alert */}
                    {status && (
                        <div className="absolute -top-14 left-0 right-0">
                            <div
                                className={`px-4 py-2 rounded-md text-center ${status.startsWith("✅")
                                    ? "bg-green-100 text-green-700 border border-green-400"
                                    : "bg-red-100 text-red-700 border border-red-400"
                                    }`}
                            >
                                {status}
                            </div>
                        </div>
                    )}

                    <h2 className="text-2xl font-bold text-center mb-6">
                        {isSignup ? "Sign Up" : "Login"}
                    </h2>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {isSignup && (
                            <div>
                                <label className="block mb-1">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full border px-4 py-2 rounded-lg"
                                />
                            </div>
                        )}
                        <div>
                            <label className="block mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full border px-4 py-2 rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="block mb-1">Password</label>
                            <input
                                type="password"
                                name="password"
                                required
                                className="w-full border px-4 py-2 rounded-lg"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                        >
                            {isSignup ? "Sign Up" : "Login"}
                        </button>
                    </form>

                    {/* Toggle */}
                    <p className="text-sm text-center mt-6">
                        {isSignup ? (
                            <>
                                Already have an account?{" "}
                                <button
                                    type="button"
                                    onClick={() => setIsSignup(false)}
                                    className="text-blue-600 hover:underline"
                                >
                                    Login
                                </button>
                            </>
                        ) : (
                            <>
                                Don't have an account?{" "}
                                <button
                                    type="button"
                                    onClick={() => setIsSignup(true)}
                                    className="text-blue-600 hover:underline"
                                >
                                    Sign Up
                                </button>
                            </>
                        )}
                    </p>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
}

export default Auth;