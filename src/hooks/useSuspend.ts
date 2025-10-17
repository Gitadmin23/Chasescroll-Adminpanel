import httpService from "@/helpers/services/httpService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useSuspend = (selected?: string) => {


    const queryClient = useQueryClient()

    // /business-service/admin/suspend/{id}
    const suspendUser = useMutation({
        mutationFn: (data: string) => httpService.get(`/auth/suspension/suspend-user/${data}`),
        onError: (error: any) => {


            console.log(error);
            console.log(error?.response?.data?.message);
            toast.error(error?.response?.data?.message)
        },
        onSuccess: (data: any) => {

            toast.success(data?.data?.message)

            queryClient.invalidateQueries({ queryKey: ["user"] })

        },

    });

    // /business-service/admin/suspend/{id}
    const deleteEvent = useMutation({
        mutationFn: (data: string) => httpService.delete(`/events/delete-event/${data}`),
        onError: (error: any) => {


            console.log(error);
            console.log(error?.response?.data?.message);
            toast.error(error?.response?.data?.message)
        },
        onSuccess: (data: any) => {

            toast.success(data?.data?.message)
            queryClient.invalidateQueries({ queryKey: ["event"] })

        },

    });

    // /business-service/admin/suspend/{id}
    const unsuspendUser = useMutation({
        mutationFn: (data: string) => httpService.get(`/auth/suspension/remove-user-suspension/${data}`),
        onError: (error: any) => {


            console.log(error);
            console.log(error?.response?.data?.message);
            toast.error(error?.response?.data?.message)
        },
        onSuccess: (data: any) => {

            toast.success(data?.data?.message)

            queryClient.invalidateQueries({ queryKey: ["user"] })
        },
    });

    const suspendDonation = useMutation({
        mutationFn: (data: string) => httpService.put(`/fund-raiser/admin/suspend/${data}`),
        onError: (error: any) => {
            console.log(error?.response?.data?.error_description);
            toast.error(error?.response?.data?.error_description)
        },
        onSuccess: (data: any) => {

            queryClient.invalidateQueries({ queryKey: ["donation"] })
            
            toast.success(data?.data?.message)
        },
    });

    const suspendService = useMutation({
        mutationFn: (data: string) => httpService.put(`/business-service/admin/suspend/${data}`),
        onError: (error: any) => {
            console.log(error?.response?.data?.error_description);
            toast.error(error?.response?.data?.error_description)
        },
        onSuccess: (data: any) => {
            toast.success(data?.data?.message)
            queryClient.invalidateQueries({ queryKey: [`business-${selected}`] })
        },
    });


    const suspendProduce = useMutation({
        mutationFn: (data: string) => httpService.patch(`/products/suspend/${data}`),
        onError: (error: any) => {
            console.log(error?.response?.data?.error_description);
            toast.error(error?.response?.data?.error_description)
        },
        onSuccess: (data: any) => {
            toast.success(data?.data?.message)
            queryClient.invalidateQueries({ queryKey: [`business-${selected}`] })
        },
    });

    const suspendRental = useMutation({
        mutationFn: (data: string) => httpService.post(`/rental/suspend/${data}`),
        onError: (error: any) => {
            console.log(error?.response?.data?.error_description);
            toast.error(error?.response?.data?.error_description)
        },
        onSuccess: (data: any) => {
            toast.success(data?.data?.message)
            queryClient.invalidateQueries({ queryKey: [`business-${selected}`] })
        },
    });

    const suspendCommunity = useMutation({
        mutationFn: (data: string) => httpService.put(`/group/admin/suspend-group/${data}`),
        onError: (error: any) => {
            console.log(error?.response?.data?.error_description);
            toast.error(error?.response?.data?.error_description)
        },
        onSuccess: (data: any) => {
            toast.success(data?.data?.message)
            queryClient.invalidateQueries({ queryKey: [`group`] })
            
        },
    });

    const downloadEvent = useMutation({
        mutationFn: (id: string) =>
            httpService.get(`/events/admin-download-event-members/${id}`),

        onError: (error: any) => {
            console.error(error?.response?.data?.error_description);
            toast.error(error?.response?.data?.error_description);
        },

        onSuccess: (response: any) => {
            // Extract CSV text from response
            const csvData = response?.data;

            if (!csvData) {
                toast.error("No CSV data received.");
                return;
            }

            // Create a Blob from the CSV text
            const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });

            // Create a temporary download link
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "event-members.csv");

            // Trigger download
            document.body.appendChild(link);
            link.click();

            // Cleanup
            document.body.removeChild(link);
            URL.revokeObjectURL(url);

            toast.success("Downloading CSV...");
        },
    });





    return {
        suspendUser,
        suspendDonation,
        suspendService,
        suspendCommunity,
        suspendRental,
        suspendProduce,
        unsuspendUser,
        deleteEvent,
        downloadEvent
    }

}

export default useSuspend