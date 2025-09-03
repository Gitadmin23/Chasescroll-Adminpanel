
export default function CommunityInfoModal() {
    return (
        <div className=" w-full flex flex-col gap-6 px-4 pb-4 " >
            <div className=" w-full h-[143px] flex items-center gap-3 " >
                <div className=" w-fit " > 
                    <div className=" w-[164px] h-[143px] rounded-2xl rounded-tr-sm bg-amber-300 " >

                    </div>
                </div>
                <div className=" flex flex-col gap-2 " >
                    <p className=" text-sm font-semibold " >RCCG YOUTH FOLLOWSHIP</p>
                    <p className=" text-xs " >Write an amazing description in this dedicated card section. Each word counts... </p>
                    <div className=" w-full flex justify-between items-center " >
                        <p className=" text-xs " >Users on the Community</p>
                    </div>
                </div>
            </div>
            <div className=" w-full flex flex-col gap-4 " >
                <p className=" text-xs font-medium text-brand " >Creator information</p>
                <div className=" w-full flex gap-4 " >

                </div>
            </div>
        </div>
    )
}