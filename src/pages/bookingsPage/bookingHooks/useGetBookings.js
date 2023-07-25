import { useQuery } from "@tanstack/react-query"
import { getBookings } from "../../../services/apiBookings"

export const useGetBookings = ()=>{
    const {data:bookings,error,isloading} = useQuery({queryKey:['bookings'],queryFn:getBookings})

    return {bookings,error,isloading}
}