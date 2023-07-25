import { useMutation, useQueryClient } from "@tanstack/react-query"
import { logout } from "../services/apiAuthentication"
import { useNavigate } from "react-router-dom"

export const useLogout = ()=>{
    const naviagte = useNavigate()
    const queryClient = useQueryClient()
    const {mutate:userLogout,isLoading} = useMutation({
        mutationFn:logout,
        onSuccess:()=>{
            queryClient.removeQueries()
            naviagte("/login",{replace:true})
        }
    })
    return {userLogout,isLoading}
}