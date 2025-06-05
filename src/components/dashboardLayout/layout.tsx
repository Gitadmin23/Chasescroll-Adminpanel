import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import AppSidebar from "./appSidebar";
import { HeaderLabel } from "../shared";


export default function DashboardLayout() {
  return (
    <div className=" w-full h-screen flex flex-col relative  " >
        <div className=" w-full h-full flex flex-col " >
            <Navbar />
        </div>
        <div className=" w-full flex absolute top-[100px] inset-0 " >
            <div className=" w-fit h-full " >
                <AppSidebar />
            </div>
            <div className=" w-full h-full flex flex-col flex-1 overflow-x-hidden overflow-y-auto bg-[#FAFAFB] px-6 gap-4 py-8 " >
                <HeaderLabel />
                <Outlet />
            </div>
        </div>
    </div>
  )
}