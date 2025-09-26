import CustomButton from "@/components/shared/customButton";
import ProductImageScroller from "@/components/shared/productImageScroller";
import UserImage from "@/components/shared/userImage";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
import type { IBusiness } from "@/helpers/models/product";
import { dateFormat, timeFormat } from "@/helpers/utils/dateFormat";
import useSuspend from "@/hooks/useSuspend";
import { IoMdCalendar, IoMdTime } from "react-icons/io";

export default function BusinessInfoModal({ data, selected }: { data: IBusiness | any, selected?: string }) {

    const { suspendService, suspendProduce, suspendRental } = useSuspend()

    return (
        <div className=" w-full flex flex-col gap-6 px-4 pb-4 " >
            <div className=" h-[233px] rounded-md " >
                <ProductImageScroller images={data?.images} height={"233px"} />
            </div>
            <div className=" w-full flex flex-col gap-4 " >
                <div className=" w-full flex flex-col gap-1 " >
                    <p className=" font-medium text-bodytext text-sm " >{selected} Name</p>
                    <div className=" w-full h-[47px] flex items-center rounded-xl bg-[#F9F9FB] px-3 " >
                        <p className=" text-sm " >{data?.name}</p>
                    </div>
                </div>
                <p className=" font-medium text-sm " >Starting Price <span className=" text-2xl font-semibold " >:₦ 300.00</span></p>
                <div className=" w-full flex flex-col gap-1 " >
                    <p className=" font-medium text-bodytext text-sm " >Date Created & Time</p>
                    <div className=" w-full flex gap-4 " >
                        <div className=" w-full flex flex-col gap-1 " >
                            <p className=" font-medium text-bodytext text-sm " >Date</p>
                            <div className=" w-full h-[47px] flex gap-2 items-center rounded-xl bg-[#F9F9FB] px-3 " >
                                <IoMdCalendar size={"20px"} />
                                <p className=" text-xs " >{dateFormat(data?.createdDate)}</p>
                            </div>
                        </div>
                        <div className=" w-full flex flex-col gap-1 " >
                            <p className=" font-medium text-bodytext text-sm " >Time</p>
                            <div className=" w-full h-[47px] flex gap-2 items-center rounded-xl bg-[#F9F9FB] px-3 " >
                                <IoMdTime />
                                <p className=" text-xs " >{timeFormat(data?.createdDate)}</p>
                            </div>
                        </div>
                    </div>
                    {/* <Input placeholder="@Miracle20" type="date" className=" bg-[#F6F6F8] h-[47px] rounded-2xl border-[#F6F6F8] outline-none " /> */}
                </div>
                <div className=" w-full flex flex-col gap-1 " >
                    <p className=" font-medium text-bodytext text-sm " >{selected} Description</p>
                    <div className=" w-full h-[47px] flex items-center rounded-xl bg-[#F9F9FB] px-3 " >
                        <p className=" text-sm " >{data?.description}</p>
                    </div>
                </div>
                <div className=" w-full rounded-[64px] bg-[#FAFAFF] h-[86px] px-5 flex justify-between items-center " >
                    {/* <div className=" flex items-center gap-2 " >
                        <div className=" w-fit rounded-4xl rounded-tr-[1px] " >
                            <UserImage data={data?.vendor} size="32px" />
                        </div>
                        <div className=" flex flex-col " >
                            <p className=" text-[8px] text-brand " >Business Owner</p>
                            <p className=" text-xs font-semibold " >{data?.vendor?.firstName+" "+data?.vendor?.lastName}</p>
                        </div>
                    </div> */}

                    {data?.creator && (
                        <div className=" flex gap-2 items-center " >
                            <div className=" w-fit h-fit rounded-full " >
                                <UserImage data={data.creator} />
                            </div>
                            <div className=" flex flex-col " >
                                <p className=" text-[8px] text-brand " >Business Owner</p>
                                <p className=" text-xs font-semibold " >{data.creator?.firstName + " " + data?.creator?.lastName}</p>
                            </div>
                        </div>
                    )}
                    {data.vendor && (
                        <div className=" flex gap-2 items-center " >
                            <div className=" w-fit h-fit rounded-full " >
                                <UserImage data={data.vendor} />
                            </div>
                            <div className=" flex flex-col " >
                                <p className=" text-[8px] text-brand " >Business Owner</p>
                                <p className=" text-xs font-semibold " >{data.vendor?.firstName + " " + data?.vendor?.lastName}</p>
                            </div>
                        </div>
                    )}
                    <div className=" flex gap-2 " >
                        <div className=" px-2 py-1 bg-white rounded-4xl flex justify-center items-center " >
                            <p className=" text-[8px] font-medium text-brand " >View Rating</p>
                        </div>
                        {/* <div className=" px-2 py-1 bg-white rounded-4xl flex justify-center items-center " >
                            <Button className=" text-[8px] h-[23px] rounded-full " >Message</Button>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className=" w-full flex justify-between gap-2 " >
                <CustomButton disabled={selected !== "Service"} onClick={()=> suspendService.mutate(data?.id)} isLoading={suspendService.isPending || suspendProduce.isPending || suspendRental.isPending} className=" w-[50%] h-[44px] text-xs rounded-full " >Suspend Business</CustomButton>
                <Button variant="outline" className=" w-[50%] h-[44px] text-xs rounded-full border-brand text-brand " >Close</Button>
            </div>
        </div>
    )
}