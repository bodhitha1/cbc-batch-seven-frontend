import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className=" w-full bg-accent h-[80px] text-white ">
            <div className="w-full h-full flex relative ">
                <img src="/logo.png" className="h-full px-[20px] pb-[20px]flex items-center justify-center w-[130px] object-cover absolute"></img>
                <div className=" h-full flex justify-center items-center w-full gap-[20px] text-lg ">

                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/registerpage">Register</Link>
                </div>
            </div>
        </header>
    )
}