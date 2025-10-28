import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import AdminPage from "./adminPage";
import RegisterPage from "./RegisterPage";

export default function HomePage () {

    return(
        <div className=" w-full h-full bg-background ">

            <Header/>

            <Routes path ="/">
                <Route path="/" element ={<h1>Welcome to Homepage</h1>}/>
                <Route path="/Product" element ={<h1>Product List</h1>}/>
                <Route path="/About" element ={<h1>About Us</h1>}/>
                <Route path="/Contact" element ={<h1>Contact Us</h1>}/>
                <Route path="/RegisterPage" element ={<RegisterPage/>}/>
                <Route path="/*" element ={<h1>404 NOT FOUND</h1>}/>


            </Routes>

        </div>   
    )
}