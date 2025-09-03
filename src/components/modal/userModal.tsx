import type { IUser } from "@/helpers/models/user";
import { CustomSelect } from "../shared";
import { Button } from "../ui/button"; 
import UserImage from "../shared/userImage";
import { useFetchData } from "@/hooks/useFetchData";
import type { IPagination } from "@/helpers/models/pagination";
import type { IEvent } from "@/helpers/models/event";
import { dateFormatDay, dateFormatMonth } from "@/helpers/utils/dateFormat";
import LoadingAnimation from "../shared/loadingAnimation";

export default function UserModal({data} : {data: IUser}) {

    const EventCard = ({ event } : {event: IEvent}) => {
        return (
            <div className=" w-fit rounded-md h-[140px] flex ga=-1 bg-[#F6F6F8] border border-bordercolor " >
                <div className=" w-fit " >
                    <div className=" w-[144px] h-full bg-red-400 rounded-md " >
                    
                    </div>
                </div>
                <div className=" flex flex-col gap-1 w-[160px]  " >
                    <div className=" w-full h-full flex flex-col justify-between px-2 pt-2 " >
                        <p className=" text-xs " >{event?.eventName}</p>
                        <div className=" flex justify-between " >
                            <div />
                            <div className=" flex flex-col items-center justify-center " >
                                <p className=" font-bold leading-[120%] text-xs text-brand " >{dateFormatMonth(event?.startDate)}</p>
                                <p className=" font-bold leading-[120%] text-xl " >{dateFormatDay(event?.startDate)}</p>
                            </div>
                        </div>
                    </div>
                    <Button className=" w-full h-[30px] text-xs mt-auto " >View Event</Button>
                </div>
            </div>
        )
    }


    const { data: eventData, isLoading } = useFetchData<IPagination<IEvent>>(`/events/events`, "event",
        {
            createdBy: data?.userId
        }
    ); 

    console.log(eventData); 

    return (
        <div className=" w-full flex flex-col gap-6 px-4 pb-4 " >
            <div className=" w-full flex justify-center " >
                <div className=" w-fit rounded-full border border-bordercolor rounded-tl-md " >
                    <UserImage data={data} size="120px" fontsize="40px" />
                </div>
            </div>
            <div className=" w-full rounded-2xl px-3 py-5 gap-4 border border-bordercolor flex justify-around " >
                <div className=" w-full flex gap-2 flex-col justify-center items-center " >
                    <p className=" text-xs " >Events</p>
                    <p className=" text-xs font-semibold " >{eventData?.totalElements}</p>
                    <Button className=" h-6 rounded-full w-full text-xs font-medium " >view</Button>
                </div>
                <div className=" w-full flex gap-2 flex-col justify-center items-center " >
                    <p className=" text-xs " >Community</p>
                    <p className=" text-xs font-semibold " >0</p>
                    <Button className=" h-6 rounded-full w-full text-xs font-medium " >view</Button>
                </div>
                <div className=" w-full flex gap-2 flex-col justify-center items-center " >
                    <p className=" text-xs " >Fundraising</p>
                    <p className=" text-xs font-semibold " >0</p>
                    <Button className=" h-6 rounded-full w-full text-xs font-medium " >view</Button>
                </div>
                <div className=" w-full flex gap-2 flex-col justify-center items-center " >
                    <p className=" text-xs " >User Report</p>
                    <p className=" text-xs font-semibold " >0</p>
                    <Button className=" h-6 rounded-full w-full text-xs font-medium " >view</Button>
                </div>
            </div>
            <div className=" w-full flex flex-col gap-4 " >
                <p className=" text-sm " >Personal information</p>
                <div className=" w-full flex flex-col gap-1 " >
                    <p className=" font-medium text-bodytext " >Username</p>
                    <div className=" w-full h-[47px] flex items-center rounded-xl bg-[#F9F9FB] px-3 " >
                        <p className=" text-sm " >{data?.firstName+" "+data?.lastName}</p>
                    </div>
                    {/* <Input placeholder="@Miracle20" className=" bg-[#F6F6F8] h-[47px] rounded-2xl border-[#F6F6F8] outline-none " /> */}
                </div>
                <div className=" w-full flex flex-col gap-1 " >
                    <p className=" font-medium text-bodytext " >Email Address</p>
                    <div className=" w-full h-[47px] flex items-center rounded-xl bg-[#F9F9FB] px-3 " >
                        <p className=" text-sm " >{data?.email}</p>
                    </div>
                    {/* <Input placeholder="@Miracle20" className=" bg-[#F6F6F8] h-[47px] rounded-2xl border-[#F6F6F8] outline-none " /> */}
                </div>
                <div className=" w-full flex flex-col gap-1 " >
                    <p className=" font-medium text-bodytext " >Phone Number</p>
                    <div className=" w-full h-[47px] flex items-center rounded-xl bg-[#F9F9FB] px-3 " >
                        <p className=" text-sm " >{data?.data?.mobilePhone?.value}</p>
                    </div>
                    {/* <Input placeholder="@Miracle20" className=" bg-[#F6F6F8] h-[47px] rounded-2xl border-[#F6F6F8] outline-none " /> */}
                </div>
            </div>
            <div className=" w-full flex flex-col gap-4 " >
                <p className=" text-sm " >Events</p>
                <div className=" bg-[#F6F6F8] rounded-2xl px-5 w-fit text-xs h-[40px] flex justify-center gap-1 items-center " >
                    Event Created <span className=" text-brand " >: {eventData?.totalElements}</span>
                </div>
                <LoadingAnimation loading={isLoading} length={eventData?.content?.length} > 
                <div className=" w-full h-fit flex overflow-x-auto " >
                    <div className=" w-auto h-[140px] flex gap-2 " >
                        {eventData?.content?.map((item, index) => {
                            return(
                                <EventCard key={index} event={item} />
                            )
                        })}
                    </div>
                </div> 
                </LoadingAnimation>
                <CustomSelect placeholder="Select" classname=" rounded-full border border-bordercolor bg-[#F1F1F180] !h-[48px] " data={[{
                    label: "test",
                    value: "testing"
                }]}  />
                <Button className=" w-full h-[48px] bg-brand rounded-full mt-3 " >Submit</Button>
            </div>
        </div>
    )
}