import { useQuery } from "@tanstack/react-query"
import { currentUser } from "../../services/apiAuthentication"

export const useUser = ()=>{
    const {data:user,isLoading} = useQuery({
        queryKey:["user"],
        queryFn:currentUser
    })
    return {user,isLoading,isAuthenticated:user?.role ==="authenticated"}
}