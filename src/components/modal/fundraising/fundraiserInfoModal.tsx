import CustomButton from "@/components/shared/customButton";
import { Button } from "@/components/ui/button";
import type { IFundraising } from "@/helpers/models/fundraising";
import { IMAGE_URL } from "@/helpers/services/urls";
import { dateFormat } from "@/helpers/utils/dateFormat";
import { formatNumber } from "@/helpers/utils/numberFormat";
import useSuspend from "@/hooks/useSuspend";


export default function FundraiserInfoModal({data} : {data: IFundraising}) {

    const { suspendDonation } = useSuspend()

    return (
        <div className=" w-full flex flex-col gap-6 px-4 pb-4 " >
            <div className=" h-[233px] rounded-md " >
                <img alt="donation" src={IMAGE_URL+data?.bannerImage} className=" w-full h-full object-cover rounded-md " />
            </div>
            <div className=" w-full flex flex-col gap-4 " >
                <div className=" w-full flex items-center justify-between " >
                    <div className=" flex flex-col " >
                        <p className=" text-xs " >Fund Raising Title</p>
                        <p className=" text-2xl font-bold " >{data?.name}</p>
                    </div>
                    <div className=" flex gap-2 items-center " >
                        <div className=" w-10 h-10 rounded-full bg-[#FAFAFA] flex justify-center items-center border border-bordercolor " >
                            <p className=" text-2xl font-bold " >0</p>
                        </div>
                        <p className=" text-xs ">Users Reported </p>
                    </div>
                </div>
                <div className=" py-2 px-4 rounded-2xl border flex border-bordercolor items-center justify-between " >
                    <div className=" flex flex-col " >
                        <p className=" text-xs " >Target</p>
                        <p className=" font-semibold " >{formatNumber(data?.goal)}</p>
                    </div>
                    <div className=" flex flex-col " >
                        <p className=" text-xs " >Amount </p>
                        <p className=" font-semibold " >{formatNumber(data?.total)}</p>
                    </div>
                    <div className=" w-14 h-14 bg-amber-200 rounded-full " />
                </div>
                <div className=" w-full flex justify-between items-center " >
                    <div className=" flex flex-col gap-1 " >
                        <p className=" font-semibold " >User Donation</p>
                        <p className=" text-xs " >{"0"} users donated already</p>
                    </div>
                </div> 
                <div className=" w-full flex justify-between items-center " > 
                    <p className=" font-medium " >Date Created</p>
                    <p className=" text-sm " >{dateFormat(data?.createdDate)}</p>
                </div>
                <div className=" w-full flex flex-col gap-1 " > 
                    <p className=" font-medium " >Fund Raising Description</p>
                    <p className=" text-sm " >{data?.description}</p>
                </div>
                {/* <div className=" w-full flex gap-2 items-center " >
                    <div className=" w-[48px] h-[48px] rounded-full bg-amber-400 " >

                    </div>
                    <div className=" flex flex-col gap-1 " >
                        <p className=" font-semibold " >User Donation</p>
                        <p className=" text-xs " >350 users donated already</p>
                    </div>
                </div>  */}
            </div>
            <div className=" w-full flex flex-col gap-3 " >
                <Button className=" w-full h-[53px] text-sm rounded-full " >View Users Report</Button>
                <CustomButton onClick={()=> suspendDonation.mutate(data?.id)} isLoading={suspendDonation?.isPending} variant="outline" className=" w-full h-[53px] text-sm rounded-full border-brand text-brand " >Suspend Fundraising</CustomButton>
            </div>
        </div>
    )
}