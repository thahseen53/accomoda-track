import { useState } from "react";
import AddCabin from "./coomponents/AddCabin";
import CabinList from "./coomponents/CabinList";
import Filtering from "../../components/Layouts/Filtering";

const Cabins = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="flex flex-col gap-[2rem]">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-[1.6rem] font-bold">All Cabins</h1>
        <div>
          <Filtering
            field={"discount"}
            options={[
              { label: "All", value: "all" },
              { label: "with discount", value: "with-discount" },
              { label: "without discount", value: "without-discount" },
            ]}
          />
        </div>
      </div>
      <div>
        <div className="grid grid-cols-[0.6fr,1.3fr,2fr,1fr,1fr,1fr] md:grid-cols-[0.6fr,1.8fr,2.2fr,1fr,1fr,1fr] items-center justify-center">
          <div className="p-1 "></div>
          <div className="p-1 text-sm md:text-[1rem] font-bold border border-gray-500">
            Cabin
          </div>
          <div className="p-1 text-sm md:text-[1rem]  font-bold border border-gray-500">
            Capacity
          </div>
          <div className="p-1 text-sm md:text-[1rem]  font-bold border border-gray-500">
            Price
          </div>
          <div className="p-1 text-sm md:text-[1rem]  font-bold border border-gray-500">
            Discount
          </div>

          <div className="p-1 "></div>
        </div>
      </div>
      <CabinList />
      <button
        className="bg-[#FF6D00] py-2 rounded-lg text-white text-[1rem] font-bold w-[70%] mx-auto"
        onClick={() => setShowForm(!showForm)}
      >
        Add Cabin to the list
      </button>
      {showForm && <AddCabin />}
    </div>
  );
};

export default Cabins;
