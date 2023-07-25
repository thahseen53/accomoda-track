import { useQuery } from "@tanstack/react-query"
import { getSettings } from "../../../services/apiSettings"

export const useSettings = ()=>{
    
    const {data:settingsValues,error,isLoading} =useQuery({
        queryKey:['settings'],
        queryFn:getSettings
    })
    return {settingsValues,error,isLoading}
}