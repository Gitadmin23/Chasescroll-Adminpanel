export default function AuthPage() {
    return (
        <div className=" w-screen h-screen flex justify-center items-center " >
            <img src={"/images/auth.jpg"} alt="logo" className=" w-full h-full object-cover fixed inset-0 " />
            <div className=" fixed inset-0 bg-black/50 z-10 " />
            <div className=" max-w-[500px] relative z-40 w-full h-fit py-8 rounded-2xl bg-white flex justify-center items-center " >
                <div className=" max-w-[350px] w-full h-fit flex flex-col gap-4 justify-center items-center " >
                    <div className=" w-full h-fit flex flex-col justify-center items-center " >
                        <img src={"/images/logo.jpg"} alt="logo" className=" w-14 h-14 " />
                        <p className=" text-2xl font-semibold " >Chasescroll Admin</p> 
                    </div>
                    <div className=" w-full h-full flex flex-col justify-center gap-4 items-center " >
                        <div className=" w-full flex flex-col gap-1 " >
                            <p className=" font-medium ml-1 text-[#1F1F1F] text-sm " >Email Address</p>
                            <input type="text" placeholder="Enter email" className=" w-full h-[48px] px-4 bg-[#F5F5F5CC] border rounded-full border-[#EAEBED] " />
                        </div>
                        <div className=" w-full flex flex-col gap-1 " >
                            <p className=" font-medium ml-1 text-[#1F1F1F] text-sm " >Password</p>
                            <input type="password" placeholder="Enter password" className=" w-full h-[48px] px-4 bg-[#F5F5F5CC] border rounded-full border-[#EAEBED] " />
                        </div>
                        <div className=" flex items-center w-full justify-start gap-2 " >
                            <input type="checkbox" className=" w-4 h-4 " />
                            <p className=" text-[#1F1F1F] " >Remember me</p>
                        </div>
                        <button className=" w-full h-[50px] bg-[#233DF3] text-white rounded-full font-bold " >Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}