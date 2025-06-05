import { Button } from "../ui/button";


export default function EventCard() {
    return (
        <div className=" flex items-center gap-2 " >
            <p className=" text-bodytext w-20 " >9:00 am</p>
            <div className=" p-2 w-full rounded-lg flex items-center gap-3 border border-bordercolor " >
                <div className=" w-[114px] h-[66px] bg-amber-500 " />
                <p className=" text-lg font-medium " >Davido 30 BG fest</p>
                <div className=" py-1 px-2 border border-bordercolor rounded-full text-xs text-bodytext " >
                    Mon. 28 February
                </div>
                <Button className=" px-3 " >View Event</Button>
            </div>
        </div>
    )
}