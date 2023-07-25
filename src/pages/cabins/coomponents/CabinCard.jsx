import { useState } from "react";
import AddCabin from "./AddCabin";
import { useDeleteCabin } from "../cabinHooks/useDeleteCabin";

const CabinCard = ({ cabin }) => {
  const [showForm, setShowForm] = useState(false);
  const { isDeleting, deleteCabinApi } = useDeleteCabin();

  return (
    <>
      <div className="grid grid-cols-[0.6fr,1.3fr,2fr,1fr,1fr,1fr] md:grid-cols-[0.6fr,1.8fr,2.2fr,1fr,1fr,1fr] items-center justify-center gap-y-3 bg-[#240046] shadow-lg">
        <div className="p-1 font-semibold  border-l">
          <img src={cabin.image} alt="" />
        </div>
        <div className="p-1 font-semibold  border-l">
          <h2>{cabin.name}</h2>
        </div>
        <div className="p-1 font-semibold  border-l">
          <span>fits up to{cabin.maxCapacity}</span>
        </div>
        <div className="p-1 font-semibold  border-l">
          <span>{cabin.regularPrice}</span>
        </div>
        <div className="p-1 font-semibold ">
          <span className="text-green-400">{cabin.discount}</span>
        </div>
        <div className="p-1 font-semibold border-l flex gap-2">
          <button
            className="px-2 rounded-lg bg-black"
            onClick={() => setShowForm(!showForm)}
          >
            Edit
          </button>
          <button
            className="px-2 rounded-lg bg-red-500 text-white"
            onClick={() => deleteCabinApi(cabin.id)}
            disabled={isDeleting}
          >
            Delete
          </button>
        </div>
      </div>
      {showForm && <AddCabin cabinToEdit={cabin} />}
    </>
  );
};

export default CabinCard;
