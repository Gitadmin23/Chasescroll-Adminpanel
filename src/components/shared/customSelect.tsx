import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface IProps {
    placeholder: string
    data: Array<{
        value: string;
        label: string
    }>,
    label?: string
}

export default function CustomSelect(
    {
        placeholder,
        data,
        label
    }: IProps) {
    return (
        <Select>
            <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup className=" bg-white " >
                    {label && (
                    <SelectLabel>{label}</SelectLabel>
                    )}
                    {data?.map((item, index) => {
                        return(
                            <SelectItem value={item?.value} key={index} >{item?.label}</SelectItem> 
                        )
                    })}
                </SelectGroup>
            </SelectContent>
        </Select>

    )
}