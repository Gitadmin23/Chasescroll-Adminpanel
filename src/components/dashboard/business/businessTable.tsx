import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "../../ui/button"
import { CustomPagination, DrawerSheet } from "../../shared"
import { BusinessInfoModal } from "@/components/modal"
import type { IPagination } from "@/helpers/models/pagination"
import { useFetchData } from "@/hooks/useFetchData"
import type { IBusiness, IProduct, IRental } from "@/helpers/models/product"
import { dateFormat } from "@/helpers/utils/dateFormat"
import { formatNumber } from "@/helpers/utils/numberFormat"
import { usePagintion } from "@/helpers/store/usePagination"
import { useSearchStore } from "@/helpers/store/useSearchText"
import { useEffect } from "react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import LoadingAnimation from "@/components/shared/loadingAnimation"
import UserImage from "@/components/shared/userImage"
import { FilterLayout } from "@/components/filter"
import { useNavigate } from "react-router-dom"

// const business = [
//     {
//         name: "next Generation Barbers",
//         createby: "Bradford",
//         date: "03/04/2024",
//         price: "$100-$200",
//         service: "Hair Cut & Pedicure"
//     },
//     {
//         name: "next Generation Barbers",
//         createby: "Bradford",
//         date: "03/04/2024",
//         price: "$100-$200",
//         service: "Hair Cut & Pedicure"
//     },
//     {
//         name: "next Generation Barbers",
//         createby: "Bradford",
//         date: "03/04/2024",
//         price: "$100-$200",
//         service: "Hair Cut & Pedicure"
//     },
//     {
//         name: "next Generation Barbers",
//         createby: "Bradford",
//         date: "03/04/2024",
//         price: "$100-$200",
//         service: "Hair Cut & Pedicure"
//     },
//     {
//         name: "next Generation Barbers",
//         createby: "Bradford",
//         date: "03/04/2024",
//         price: "$100-$200",
//         service: "Hair Cut & Pedicure"
//     },
// ]

export default function BusinessTable(
    { show }: { show?: boolean }
) {

    const navigate = useNavigate()
    const { search, selected, setSelected } = useSearchStore((state => state))
    const { updateTotalPage, page, pageSize } = usePagintion((state) => state)


    const { data, isLoading } = useFetchData<IPagination<IBusiness | IRental | IProduct | any>>({
        endpoint: selected === "Service" ? `/business-service/admin/search` : selected === "Product" ? "/products/admin/search" : "/rental/admin/search", name: `business-${selected}`, params: {
            page: page - 1,
            size: show ? 6 : pageSize,
            searchText: search
        }
    });

    useEffect(() => {
        if (!isLoading) {
            updateTotalPage(Number(data?.totalPages))
        }
    }, [isLoading]) 

    return (
        <div className=" w-full flex flex-col gap-1 " >
            {show ? (
                <div className=" w-full flex justify-between items-center rounded-md py-3 px-4 bg-white " >
                    <p className=" text-sm font-semibold " >Recent Activities</p>
                    <div className=" flex gap-3 items-center " >

                        <Button onClick={()=> navigate("/dashboard/business/allbusiness")} className=" w-fit px-4 h-[40px] text-sm rounded-full " >
                            View All
                        </Button>
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
                </div>
            ) : (
                <FilterLayout type="business" />
            )}
            <LoadingAnimation loading={isLoading} >
                <Table>
                    <TableHeader>
                        <TableRow className=" h-[47px] border-white uppercase " >
                            <TableHead>Business name</TableHead>
                            <TableHead>Created By</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>{selected} price</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Suspended</TableHead>
                            <TableHead>ACTION</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className=" bg-white "  >
                        {data?.content.map((item, index) => (
                            <TableRow className=" h-[47px] border-white " key={index}>
                                <TableCell >{item.name}</TableCell>
                                <TableCell >
                                    {item.creator && (
                                        <div className=" flex gap-2 items-center " >
                                            <div className=" w-fit h-fit rounded-full " >
                                                <UserImage data={item.creator} />
                                            </div>
                                            {item.creator?.firstName + " " + item?.creator?.lastName}
                                        </div>
                                    )}
                                    {item.vendor && (
                                        <div className=" flex gap-2 items-center " >
                                            <div className=" w-fit h-fit rounded-full " >
                                                <UserImage data={item.vendor} />
                                            </div>
                                            {item.vendor?.firstName + " " + item?.vendor?.lastName}
                                        </div>
                                    )}
                                </TableCell>
                                <TableCell >{dateFormat(item?.createdDate)}</TableCell>
                                <TableCell >{item?.frequency ?
                                    <div className=" flex flex-col gap-1 " >
                                        {item?.dailyPrice && (
                                            <p>DailyPrice : {formatNumber(item?.dailyPrice)}</p>
                                        )}
                                        {item?.hourlyPrice && (
                                            <p>HourlyPrice : {formatNumber(item?.hourlyPrice)}</p>
                                        )}
                                    </div> : formatNumber(item.price)}</TableCell>
                                <TableCell >{item?.category?.replace("_", " ")?.replace("_", " ")?.replace("_", " ")?.replace("_", " ")?.replace("_", " ")}</TableCell>
                                <TableCell className=" capitalize " >{item?.isSuspended ? item?.isSuspended+"" : "false"}</TableCell>
                                <TableCell >
                                    <DrawerSheet header={`${selected} Details`} >
                                        <BusinessInfoModal selected={selected} data={item} />
                                    </DrawerSheet>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </LoadingAnimation>
            {(Number(data?.numberOfElements) > pageSize && !show) && (
                <CustomPagination totalElement={data?.totalElements + ""} />
            )}
            <div className=" h-9 w-full " />
        </div>
    )
}