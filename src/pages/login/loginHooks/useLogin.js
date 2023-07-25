import { useMutation, useQueryClient } from "@tanstack/react-query"
import { login } from "../../../services/apiAuthentication"
import { useNavigate } from "react-router-dom"


export const useLogin = ()=>{
    const queryClient = useQueryClient()
    const naviagte = useNavigate()
    const {mutate:loginUser,isLoading} = useMutation({
        mutationFn:({email,password})=>login({email,password}),
        onSuccess:(user)=>{
            queryClient.setQueryData(["user"],user.user)
            naviagte("/",{replace:true})
        },
        onError:(error)=>{
            console.log(error)
        }
    })
 return {loginUser,isLoading}
}