import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table" 
import { CustomPagination } from "../../shared" 
import { useFetchData } from "@/hooks/useFetchData"; 
import { dateFormat } from "@/helpers/utils/dateFormat";
import LoadingAnimation from "@/components/shared/loadingAnimation";
import type { IPagination } from "@/helpers/models/pagination";
import { usePagintion } from "@/helpers/store/usePagination";
import { useSearchStore } from "@/helpers/store/useSearchText";
import { useEffect } from "react"; 
import { formatNumber } from "@/helpers/utils/numberFormat";

export default function CommunityTable(
    { show }: { show?: boolean }
) { 

    const { search } = useSearchStore((state => state))
    const { updateTotalPage, page, pageSize } = usePagintion((state) => state)

    const { data, isLoading } = useFetchData<IPagination<{
        "id": string,
        "userID": string,
        "timestamp": number,
        "description": string,
        "currency": string,
        "gatewayReferenceID": string,
        "payableAmount": number,
        "totalAmount": number,
        "status": string,
        "purpose": string,
        "transactionGateway": string,
        "linkedOrderCode": string,
        "isDelete": boolean
    }>>({
        endpoint: `/payments/admin-transactions`, name: "transaction", params: {
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
            <LoadingAnimation loading={isLoading} >
                <Table>
                    <TableHeader>
                        <TableRow className=" h-[47px] border-white uppercase " >
                            <TableHead>USERNAME</TableHead>
                            <TableHead>AMOUNT</TableHead>
                            <TableHead>TYPE</TableHead>
                            <TableHead>STATUS</TableHead>
                            <TableHead>DATE</TableHead> 
                        </TableRow>
                    </TableHeader>
                    <TableBody className=" bg-white "  >
                        {data?.content.map((item, index) => (
                            <TableRow className=" h-[47px] border-white capitalize " key={index}>
                                <TableCell >{item?.userID}</TableCell>
                                <TableCell >
                                    {formatNumber(item?.totalAmount)}
                                </TableCell>
                                <TableCell >{item?.purpose}</TableCell>
                                <TableCell >{item?.status}</TableCell>
                                <TableCell >{dateFormat(item?.timestamp)}</TableCell>
                                {/* <TableCell >{item?.isSuspended ? item?.isSuspended+"" : "false"} </TableCell>
                                <TableCell >
                                    <DrawerSheet header="Community Information" >
                                        <CommunityInfoModal item={item} />
                                    </DrawerSheet>
                                </TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </LoadingAnimation>
            {(Number(data?.totalElements) > pageSize && !show) && (
                <CustomPagination totalElement={data?.totalElements + ""} />
            )}
            <div className=" h-9 w-full " />
        </div>
    )
}