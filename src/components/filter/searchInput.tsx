import { Input } from "../ui/input"
import { IoIosSearch } from "react-icons/io"
import { useSearchStore } from "@/helpers/store/useSearchText"
import { useEffect } from "react"

interface IProps {
    placeholder: string
}

export default function SearchInput(
    { placeholder } : IProps
) { 

    const { search, setSearchText } = useSearchStore((state) => state)

    useEffect(() => {
        setSearchText("")
    }, [])

    return (
        <div className=" w-full relative h-[48px] " >
            <div className=" absolute left-0  flex items-center justify-center pl-3 pr-2 inset-y-0 " > 
                <IoIosSearch size={"25px"} />
            </div>
            <Input
                type={"search"}
                value={search}
                onChange={(e) => setSearchText(e.target.value)}
                className={`  w-full h-[48px] px-4 bg-[#F5F5F5CC] border rounded-full border-[#EAEBED] pl-11 `}
                placeholder={placeholder}
            />
        </div>
    )
}