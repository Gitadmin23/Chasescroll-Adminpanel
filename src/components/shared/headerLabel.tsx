import { useLocation } from "react-router"
import { Button } from "../ui/button"
import { ChevronRight, Plus } from "lucide-react"

export default function HeaderLabel() {

    const title = "Welcome, Admin"
    const location = useLocation()

    return (
        <div className={` w-full flex justify-between items-center gap-2 text-headtext ${location?.pathname === "/dashboard" ? " py-2 " : " bg-white py-1 px-2 "} `} >
            {location?.pathname === "/dashboard" ?
                (
                    <p className="  font-medium text-3xl " >{title}</p>
                ) : (
                    <div className=" flex gap-1 items-center " > 
                        <p className="  font-medium text-bodytext " >Dashboard {" > "}</p>
                        {/* <ChevronRight /> */}
                        <p className=" capitalize " >{location?.pathname?.replace("/dashboard/", "").replace("/", " > ")}</p>
                    </div>
                )
            }
            {location?.pathname === "/dashboard" && (
                <div className=" flex gap-3 items-center " >
                    <Button variant="outline" className=" w-[80px] font-semibold rounded-[6px] " >Export</Button>
                    <Button variant="default" className=" w-fit px-4 font-semibold rounded-[6px] " >
                        <div className=" w-full flex items-center gap-1 " >
                            <Plus />
                            Create
                        </div>
                    </Button>
                </div>
            )}
        </div>
    )
}