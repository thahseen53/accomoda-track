import CabinCard from "./CabinCard";
import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../../services/apiCabins";

import Spinner from "../../../components/Spinner";
import { useSearchParams } from "react-router-dom";

const CabinList = () => {
  const [searchParams] = useSearchParams();
  const {
    data: cabins,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });
  const filteredValue = searchParams.get("discount") || "all";
  let filteredCabins;
  if (filteredValue === "all") {
    filteredCabins = cabins;
  }
  if (filteredValue === "with-discount") {
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);
  }
  if (filteredValue === "without-discount") {
    filteredCabins = cabins.filter((cabin) => cabin.discount <= 1);
  }
  if (isLoading) return <Spinner />;
  return (
    <div className="">
      {filteredCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
};

export default CabinList;
