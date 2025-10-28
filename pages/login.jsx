import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fadeIn, setFadeIn] = useState(false); // for animation
    const navigate = useNavigate();

    useEffect(() => {
        // trigger fade-in animation after component mounts
        setFadeIn(true);
    }, []);
    /*login function ekea awlk tiyanawa hadanna oonea*/
    async function login() {
        try {
            const response = await axios.post(
                import.meta.env.VITE_API_URL + "/user/login",
                { email, password }
            );

            localStorage.setItem("token", response.data.token);
            const token = localStorage.getItem("token"); 
            const user = response.data.user;
            console.log(response.data.success);


            if (user.role == "admin") {
                navigate("/admin");
                toast.success("Welcome Admin!");
            } else {
                navigate("/");
                toast.success("Login successful!");
            }

        } catch (error) {

            console.error("Login error:", error);
            toast.error("login failed. Please check your credentials.");
        }
    }
    return (
        <div className="w-full h-screen bg-[url('/bg.jpg')] bg-cover bg-center flex">
            {/* Left side with login form */}
            <div className="w-[50%] h-full flex justify-center items-center">
                <div
                    className={`w-[700px] h-[600px] backdrop-blur-2xl bg-white/10 shadow-2xl rounded-[20px] flex flex-col justify-center items-center gap-8 p-8 transform transition-all duration-700 ${fadeIn ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
                        }`}
                >
                    <h2 className="text-3xl font-bold text-accent">Login</h2>

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

                    {/* Lost Password */}
                    <div className="w-full flex justify-end">
                        <a
                            href="/forgot-password"
                            className="text-[#A3A3A3] hover:text-white text-sm transition"
                        >
                            Lost Password?
                        </a>
                    </div>

                    {/* Buttons */}
                    <button
                        onClick={login}
                        className="bg-accent w-full h-[50px] rounded-2xl text-lg text-white font-semibold hover:bg-accent-dark transition transform hover:scale-105"
                    >
                        Login
                    </button>

                    <button
                        onClick={() => navigate("/RegisterPage")}
                        className="border-2 border-accent w-full h-[50px] rounded-2xl text-lg text-accent font-semibold hover:bg-white hover:text-black transition transform hover:scale-105"
                    >
                        REGISTER
                    </button>
                </div>
            </div>

            {/* Right side */}
            <div className="w-[50%] h-full"></div>
        </div>
    );
}
