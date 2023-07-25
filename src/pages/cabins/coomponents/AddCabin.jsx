import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { createCabin } from "../../../services/apiCabins";
import { useEditCabin } from "../cabinHooks/useEditCabin";
import { useCreateCabin } from "../cabinHooks/useCreateCabin";

const AddCabin = ({ cabinToEdit = {} }) => {
  const { editCabin, isEditing } = useEditCabin();
  const { addNewCabin, isCreating } = useCreateCabin();
  const { id: editId, ...editValues } = cabinToEdit;
  const isCabinToedited = Boolean(editId);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: isCabinToedited ? editValues : {},
  });

  const onSubmit = (data) => {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    if (isCabinToedited) {
      editCabin({ cabin: { ...data, image }, id: editId });
    } else {
      addNewCabin(
        { ...data, image: image },
        {
          onSuccess: () => {
            reset();
          },
        }
      );
    }
  };
  const inputStyle =
    "w-4/6 md:w-3/6 h-10 p-2 outline-none border border-slate-300 rounded-lg focus:border-none focus:ring-yellow focus:ring-1 text-black";

  return (
    <div className="flex flex-col">
      <h3 className="mx-auto text-2xl font-bold">Enter cabin details</h3>
      <form
        className="flex flex-col m-2 gap-4 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className=" w-full  flex justify-center gap-2 items-center">
          <label htmlFor="name" className="text-1xl font-semibold">
            cabin name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="enter cabin name"
            className={inputStyle}
            {...register("name", { required: "name is required" })}
          />
        </div>
        <div className="w-full flex justify-center gap-2 items-center">
          <label htmlFor="maxCapacity" className="text-1xl font-semibold">
            max capacity
          </label>
          <input
            type="number"
            id="maxCapacity"
            name="maxCapacity"
            placeholder="enter max capacity"
            className={inputStyle}
            {...register("maxCapacity", {
              required: "maximum capacity is required",
              min: {
                value: 1,
              },
            })}
          />
        </div>
        <div className="w-full  flex justify-center gap-2 items-center">
          <label htmlFor="regularPrice" className="text-1xl font-semibold">
            price
          </label>
          <input
            type="text"
            id="regularPrice"
            name="regularPrice"
            placeholder="regular price"
            className={inputStyle}
            {...register("regularPrice")}
          />
        </div>
        <div className="w-full  flex justify-center gap-2 items-center">
          <label htmlFor="discount" className="text-1xl font-semibold">
            discount{" "}
          </label>
          <input
            type="number"
            id="discount"
            name="discount"
            placeholder="enter discount"
            className={inputStyle}
            {...register("discount")}
          />
        </div>
        <div className="w-full  flex justify-center gap-2 items-start">
          <label htmlFor="description" className="text-1xl font-semibold">
            description
          </label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="5"
            className="w-3/6 border outline-none text-black border-slate-300 rounded-lg focus:border-none focus:ring-yellow focus:ring-1"
            {...register("description")}
          ></textarea>
        </div>
        <div className="w-full  flex justify-center gap-2 items-start">
          <label htmlFor="image" className="text-1xl font-semibold">
            upload photo
          </label>
          <input
            type="file"
            accept="image/*"
            id="image"
            cols="30"
            rows="5"
            className="w-3/6 outline-none border border-slate-300 rounded-lg focus:border-none focus:ring-yellow focus:ring-1"
            {...register("image", {
              required: isCabinToedited ? false : "images are required",
            })}
          />
        </div>
        <div className="ml-auto mr-10 flex items-center gap-3">
          <button
            type="reset"
            className="py-1 rounded-lg bg-red-500 px-3 text-white hover:bg-red-600"
          >
            {" "}
            cancel
          </button>
          <button
            type="submit"
            className="py-1 rounded-lg px-3 bg-blue-500 text-white hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCabin;
