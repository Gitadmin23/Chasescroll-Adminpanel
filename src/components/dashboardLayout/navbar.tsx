export default function Navbar() {
    return (
        <div className=" w-full h-[100px] px-6 flex justify-between items-center bg-white border-b border-[#E1E1E1] " >
            <div className=" w-[64px] h-[64px] rounded-full bg-[#F5F5F5] flex items-center justify-center " >
                <img src={"/images/logo.jpg"} alt="logo" className=" w-full h-full object-cover " />
            </div> 
        </div>
    )
}