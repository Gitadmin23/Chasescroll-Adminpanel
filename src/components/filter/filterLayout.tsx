import { useSearchStore } from "@/helpers/store/useSearchText";
import { useEffect } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import SearchInput from "./searchInput";

interface IProps {
    type?: "user" | "event" | "fundraising" | "business"
}

export default function FilterLayout(
    { type }: IProps
) {


    const { selected, setSelected } = useSearchStore((state) => state)

    useEffect(() => {
        setSelected("Service")
    }, [])

    return (
        <div className=" w-full flex bg-white items-center gap-4 py-3 px-4 " >
            <div className=" w-[350px] " >
                <SearchInput placeholder="Search..." />
            </div>
            {type === "business" && ( 
                <div className=" w-fit " >
                    <Select value={selected} onValueChange={(value) => setSelected(value)}  >
                        <SelectTrigger style={{ borderRadius: "999px" }} className="w-[180px]">
                            <SelectValue placeholder="Select a fruit" />
                        </SelectTrigger>
                        <SelectContent className=" bg-white "  >
                            <SelectGroup>
                                <SelectItem value="Service">Service</SelectItem>
                                <SelectItem value="Product">Product</SelectItem>
                                <SelectItem value="Rental">Rental</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            )}
        </div>
    )
}