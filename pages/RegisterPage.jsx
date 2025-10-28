import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [fadeIn, setFadeIn] = useState(false); // for animation
    const navigate = useNavigate();

    useEffect(() => {
        setFadeIn(true);
    }, []);

    async function register() {
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        try {
            const response = await axios.post(
                import.meta.env.VITE_API_URL + "/User/register",
                { name, email, password }
            );
            console.log(response.data);

            if (response.data.success) {
                alert("Registration successful!");
                navigate("/login");
            }
        } catch (error) {
            console.error(error);
            alert("Registration failed. Please try again.");
        }
    }

    return (
        <div className="w-full h-screen bg-[url('/bg.jpg')] bg-cover bg-center flex">
            {/* Left side with register form */}
            <div className="w-[50%] h-full flex justify-center items-center">
                <div
                    className={`w-[700px] h-[700px] backdrop-blur-2xl bg-white/10 shadow-2xl rounded-[20px] flex flex-col justify-center items-center gap-6 p-8 transform transition-all duration-700 ${
                        fadeIn ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
                    }`}
                >
                    <h2 className="text-3xl font-bold text-accent">Register</h2>

                    {/* Name */}
                    <div className="flex flex-col w-full gap-2">
                        <label className="text-[#A3A3A3] font-medium">Full Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full h-[45px] bg-white/90 rounded-lg pl-4 focus:outline-none focus:ring-2 focus:ring-accent transition"
                            placeholder="Enter your full name"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col w-full gap-2">
                        <label className="text-[#A3A3A3] font-medium">Email</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full h-[45px] bg-white/90 rounded-lg pl-4 focus:outline-none focus:ring-2 focus:ring-accent transition"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col w-full gap-2">
                        <label className="text-[#A3A3A3] font-medium">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full h-[45px] bg-white/90 rounded-lg pl-4 focus:outline-none focus:ring-2 focus:ring-accent transition"
                            placeholder="Enter your password"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="flex flex-col w-full gap-2">
                        <label className="text-[#A3A3A3] font-medium">Confirm Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full h-[45px] bg-white/90 rounded-lg pl-4 focus:outline-none focus:ring-2 focus:ring-accent transition"
                            placeholder="Confirm your password"
                        />
                    </div>

                    {/* Buttons */}
                    <button
                        onClick={register}
                        className="bg-accent w-full h-[50px] rounded-2xl text-lg text-white font-semibold hover:bg-accent-dark transition transform hover:scale-105"
                    >
                        REGISTER
                    </button>

                    <button
                        onClick={() => navigate("/login")}
                        className="border-2 border-accent w-full h-[50px] rounded-2xl text-lg text-accent font-semibold hover:bg-white hover:text-black transition transform hover:scale-105"
                    >
                        LOGIN
                    </button>
                </div>
            </div>

            {/* Right side */}
            <div className="w-[50%] h-full"></div>
        </div>
    );
}
