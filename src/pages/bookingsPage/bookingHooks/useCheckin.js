import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { updateBooking } from "../../../services/apiBookings";

export function useCheckin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
  
    const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
      mutationFn: ({ id}) =>
        updateBooking(id, {
          status: "checked-in",
          isPaid: true,
        }),
  
      onSuccess: (data) => {
        queryClient.invalidateQueries({ active: true });
        navigate("/");
      },
  
      onError: (error) => console.log(error),
    });
  
    return { checkin, isCheckingIn };
  }