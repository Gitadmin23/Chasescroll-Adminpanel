import CustomButton from "@/components/shared/customButton";
import UserImage from "@/components/shared/userImage";
import { Button } from "@/components/ui/button";
import type { IGroup } from "@/helpers/models/group";
import { IMAGE_URL } from "@/helpers/services/urls";
import { dateFormat, timeFormat } from "@/helpers/utils/dateFormat";
import useSuspend from "@/hooks/useSuspend";
import { IoMdCalendar, IoMdTime } from "react-icons/io";

export default function CommunityInfoModal(
    { item }: { item: IGroup }
) {

    const { suspendCommunity } = useSuspend()

    return (
        <div className=" w-full flex flex-col gap-6 px-4 h-full pb-4 " >
            <div className=" w-full h-[143px] flex items-center gap-3 " >
                <div className=" w-fit " >
                    <div className=" w-[164px] h-[143px] rounded-2xl rounded-tr-sm bg-amber-300 " >
                        <img src={IMAGE_URL + item?.data?.imgSrc} />
                    </div>
                </div>
                <div className=" flex flex-col gap-2 " >
                    <p className=" text-sm font-semibold uppercase " >{item?.data?.name}</p>
                    <p className=" text-xs " >{item?.data?.description} </p>
                    <div className=" w-full flex justify-between items-center " >
                        <p className=" text-xs " >Users on the Community</p>
                    </div>
                </div>
            </div>
            <div className=" w-full flex flex-col gap-4 " >
                <p className=" text-xs font-medium text-brand " >Creator information</p>
                <div className=" w-full flex gap-4 " >
                    <div className=" w-full flex flex-col gap-1 " >
                        <p className=" font-medium text-bodytext text-sm " >Full-name </p>
                        <div className=" w-full h-[47px] flex gap-2 items-center rounded-xl bg-[#F9F9FB] px-3 " >
                            <p className=" text-xs " >{item?.creator?.firstName + " " + item?.creator?.lastName}</p>
                        </div>
                    </div>
                    <div className=" w-full flex flex-col gap-1 " >
                        <p className=" font-medium text-bodytext text-sm " >Email Address</p>
                        <div className=" w-full h-[47px] flex gap-2 items-center rounded-xl bg-[#F9F9FB] px-3 " >
                            <p className=" text-xs " >{item?.data?.email}</p>
                        </div>
                    </div>
                </div>
                <div className=" w-full flex gap-4 " >
                    <div className=" w-full flex flex-col gap-1 " >
                        <p className=" font-medium text-bodytext text-sm " >Date</p>
                        <div className=" w-full h-[47px] flex gap-2 items-center rounded-xl bg-[#F9F9FB] px-3 " >
                            <IoMdCalendar size={"20px"} />
                            <p className=" text-xs " >{dateFormat(item?.createdOn)}</p>
                        </div>
                    </div>
                    <div className=" w-full flex flex-col gap-1 " >
                        <p className=" font-medium text-bodytext text-sm " >Time</p>
                        <div className=" w-full h-[47px] flex gap-2 items-center rounded-xl bg-[#F9F9FB] px-3 " >
                            <IoMdTime />
                            <p className=" text-xs " >{timeFormat(item?.createdOn)}</p>
                        </div>
                    </div>
                </div>
                <div className=" w-full flex gap-4 " >
                    <div className=" w-full flex flex-col gap-1 " >
                        <p className=" font-medium text-bodytext text-sm " >Community Description</p>
                        <div className=" w-full h-[47px] flex gap-2 items-center rounded-xl bg-[#F9F9FB] px-3 " >
                            <p className=" text-xs " >{item?.data?.description}</p>
                        </div>
                    </div>
                </div>

                {item?.creator && (
                    <div className=" flex gap-2 items-center " >
                        <div className=" w-fit h-fit rounded-full " >
                            <UserImage data={item.creator} />
                        </div>
                        <div className=" flex flex-col " >
                            <p className=" text-[8px] text-brand " >Business Owner</p>
                            <p className=" text-xs font-semibold " >{item.creator?.firstName + " " + item?.creator?.lastName}</p>
                        </div>
                    </div>
                )}
            </div>

            <div className=" w-full flex justify-between gap-2 mt-auto " >
                    <CustomButton onClick={()=> suspendCommunity.mutate(item?.id)} isLoading={suspendCommunity.isPending} className=" w-[50%] h-[44px] text-xs rounded-full " >Suspend Community</CustomButton>
                    <Button variant="outline" className=" w-[50%] h-[44px] text-xs rounded-full border-brand text-brand " >Close</Button>
                </div>
        </div>
    )
}