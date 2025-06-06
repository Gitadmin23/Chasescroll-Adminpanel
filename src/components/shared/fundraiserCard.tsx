import { Button } from "../ui/button";


export default function FundraiserCard() {
    return (
        <div className=" w-full flex gap-3 bg-white rounded-2xl items-center border-bordercolor border p-2 h-[144px] " >
            <div className=" w-fit h-full " >
                <div className=" w-[183px] h-full rounded-lg bg-amber-400 " >

                </div>
            </div>
            <div className=" w-full h-fit flex flex-col gap-2 " >
                <div className=" w-full flex justify-between " >
                    <div className=" flex flex-col w-[150px] " >
                        <p className=" text-sm text-bodytext " >Fundraising Title</p>
                        <p className=" font-bold " >Save Tope</p>
                    </div>
                    <div className=" flex flex-col text-center" >
                        <p className=" text-sm text-bodytext " >Date Created </p>
                        <p className=" font-bold " >23/12/2024</p>
                    </div>
                    <Button variant={"outline"} className=" border-brand rounded-3xl border h-[34px] text-sm w-[150px] text-brand font-medium " >
                        View
                    </Button>
                </div>
                <div className=" w-full h-[2px] bg-bordercolor " />
                <div className=" w-full h-full " >
                    <div className=" w-full flex justify-between " >
                        <div className=" flex flex-col w-[150px]" >
                            <p className=" text-sm text-bodytext " >Target</p>
                            <p className=" font-bold " >220,0000</p>
                        </div>
                        <div className=" flex flex-col text-center " >
                            <p className=" text-sm text-bodytext " >Amount</p>
                            <p className=" font-bold " >110,0000</p>
                        </div>
                        <div className=" flex flex-col w-[150px]" >
                            <p className=" text-sm text-bodytext " >People Donating</p>
                            {/* <p className=" font-bold " >110,0000</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}