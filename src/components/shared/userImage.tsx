import type { IUser } from "@/helpers/models/user";
import { IMAGE_URL } from "@/helpers/services/urls";

interface IProps {
    size?: string;
    fontsize?: string;
    data: IUser;
}

export default function UserImage({
    size,
    fontsize,
    data
}:IProps ){
    return(  
        <div style={{ width: size ?? "30px", height: size ?? "30px", fontSize: fontsize ?? "18px" }} className={` rounded-full bg-gray-300  `} >
            {data?.data?.imgMain?.value ? (
                <img alt="userphoto" src={data?.data?.imgMain?.value?.includes("http") ?  data?.data?.imgMain?.value : IMAGE_URL+data?.data?.imgMain?.value} className=" w-full h-full rounded-full object-cover " />
            ) : (
                <div className=" w-full h-full flex justify-center items-center " >
                    <p className=" font-semibold text-xs " >{data?.firstName?.charAt(0).toUpperCase()+data?.lastName?.charAt(0).toUpperCase()}</p>
                </div>
            )} 
        </div>
    )
}