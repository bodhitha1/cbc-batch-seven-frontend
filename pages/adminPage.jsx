import { Route, Routes } from "react-router-dom";
import Header from "../components/header";

export default function AdminPage() {
  return (
    <div className="w-full h-full bg-white flex text-secondary">
      <div className="w-[300px] h-full bg-background rounded-xl m-[5px] flex flex-col p-2 gap-[20px] items-center pt-[10px]">
        <div className="flex flex-row w-full h-[70px] bg-accent items-center rounded-2xl pl-4">
          <img src="logo.png" alt="CBC - Crystal Beauty Clear" className="h-[60px]"></img>
          <span className="text-white text-xl ml-4 font-sans">Admin Panel</span>
        </div>
      </div>
      <div className=" w-[calc(100%-300px)] h-full bg-background rounded-xl ml-[5px] overflow-hidden">
        <div className="h-full max-h-full w-full max-w-full overflow-y-scroll">
          <Routes>
            <Route path="/products" element={<h1>product page</h1>} />
            <Route path="/stoks" element={<h1>stocks</h1>} />
            <Route path="/sales" element={<h1>sales</h1>} />
            <Route path="/*" element={<h1>Dashboard</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}