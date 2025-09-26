import httpService from "@/helpers/services/httpService"; 
import { useMutation } from "@tanstack/react-query"; 
import toast from "react-hot-toast"; 

const useSuspend = () => {
    // /business-service/admin/suspend/{id}
    const suspendUser = useMutation({
        mutationFn: (data: string) => httpService.get(`/auth/suspension/suspend-user/${data}`),
        onError: (error: any) => { 
            console.log(error?.response?.data?.error_description);
            toast.error(error?.response?.data?.error_description)
        },
        onSuccess: (data: any) => { 
            toast.success(data?.data?.message)  
        },
    });    

    const suspendDonation = useMutation({
        mutationFn: (data: string) => httpService.put(`/fund-raiser/admin/suspend/${data}`),
        onError: (error: any) => { 
            console.log(error?.response?.data?.error_description);
            toast.error(error?.response?.data?.error_description)
        },
        onSuccess: (data: any) => { 
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
        },
    }); 


    const suspendProduce = useMutation({
        mutationFn: (data: string) => httpService.put(`/business-service/admin/suspend/${data}`),
        onError: (error: any) => { 
            console.log(error?.response?.data?.error_description);
            toast.error(error?.response?.data?.error_description)
        },
        onSuccess: (data: any) => { 
            toast.success(data?.data?.message)  
        },
    });

    const suspendRental = useMutation({
        mutationFn: (data: string) => httpService.put(`/business-service/admin/suspend/${data}`),
        onError: (error: any) => { 
            console.log(error?.response?.data?.error_description);
            toast.error(error?.response?.data?.error_description)
        },
        onSuccess: (data: any) => { 
            toast.success(data?.data?.message)  
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
        },
    });

    return { 
        suspendUser, 
        suspendDonation,
        suspendService,
        suspendCommunity,
        suspendRental,
        suspendProduce
    }

}

export default useSuspend