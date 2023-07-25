import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../../services/apiCabins";
export const useDeleteCabin =()=>{
    const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate:deleteCabinApi } = useMutation({
  mutationFn: deleteCabin,
  onSuccess: () => {
    queryClient.invalidateQueries({
      queryKey: ["cabins"],
    });
  },
});
 return {isDeleting,deleteCabinApi}
}
