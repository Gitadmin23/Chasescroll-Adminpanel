import type { ILogin } from "@/helpers/models/auth";
import { unsecureHttpService } from "@/helpers/services/httpService"; 
import { useMutation } from "@tanstack/react-query"; 
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Cookies from "js-cookie"

const useAuth = () => {  

    const navigate = useNavigate()  

    const { mutate: signIn, isPending: signInPending } = useMutation({
        mutationFn: (data: ILogin) => unsecureHttpService.post(`/auth/signin`, data),
        onError: (error: any) => { 
            console.log(error);
            toast.error("Incorrect Username or Password")
        },
        onSuccess: (data: any) => { 
            toast.success("Login Successful")
            Cookies.set("chase_token", data?.data?.access_token) 
            console.log(data?.data); 
            navigate("/dashboard")
        },
    });    

    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
          },
        validationSchema: Yup.object({
            username: Yup.string().required('Required'),
            password: Yup.string().required('Required'), 
        }),
        onSubmit: (data: ILogin) => {
            signIn({
                username: data?.username,
                password: data?.password
            })
        },
    });
 

    return { 
        signInPending,  
        formik
    }

}

export default useAuth