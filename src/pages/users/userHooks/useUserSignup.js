import { useMutation } from "@tanstack/react-query"
import { userSignUp } from "../../../services/apiAuthentication"
export const useUserSignUp =()=>{
   const {mutate:userSignupFn,isLoading}= useMutation({
        mutationFn:userSignUp,
    })
    return{userSignupFn,isLoading}
}