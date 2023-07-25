import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../../services/apiCabins";

export const useCreateCabin = ()=>{
    const queryClient = useQueryClient()
  const { mutate: addNewCabin, isLoading: isCreating } = useMutation({
    
    mutationFn: createCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      })
    },
  });
  return {isCreating,addNewCabin}
}