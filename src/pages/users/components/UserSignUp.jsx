import { useForm } from "react-hook-form";
import { useUserSignUp } from "../userHooks/useUserSignup";

const UserSignUp = () => {
  const { register, handleSubmit, reset, formState, getValues } = useForm();
  const { errors } = formState;
  const { userSignupFn } = useUserSignUp();
  const onSubmit = ({ fullName, email, password }) => {
    userSignupFn({ fullName, email, password });
  };
  return (
    <div className="px-3 py-5 mt-8 md:w-8/12 rounded-lg mx-auto bg-[#240046] ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-7 justify-center"
      >
        <div className="flex gap-2 ">
          <label
            htmlFor="fullName"
            className="w-1/2 md:text-1xl font-bold md:w-[33%]"
          >
            Enter user Full Name
          </label>
          <input
            type="text"
            className="w-1/2 ring-1 ring-gray-400 rounded-lg px-2 md:w-[33%] text-black"
            id="fullName"
            {...register("fullName", { required: "full name is required" })}
          />
          {errors?.fullName?.message && (
            <p className="text-red-500">{errors?.fullName?.message}</p>
          )}
        </div>
        <div className="flex gap-2">
          <label
            htmlFor="email"
            className="w-1/2 md:text-1xl font-bold md:w-[33%]"
          >
            Enter user Email
          </label>
          <input
            type="email"
            className="w-1/2 ring-1 ring-gray-400 rounded-lg px-2 md:w-[33%] text-black"
            id="email"
            {...register("email", { required: "email is required" })}
          />
          {errors?.email?.message && (
            <p className="text-red-500 md:w-[33%]">{errors?.email?.message}</p>
          )}
        </div>
        <div className="flex gap-2">
          <label
            htmlFor="password"
            className="w-1/2 md:text-1xl font-bold md:w-[33%]"
          >
            Enter Password
          </label>
          <input
            type="password"
            id="password"
            className="w-1/2 ring-1 ring-gray-400 rounded-lg px-2 md:w-[33%] text-black"
            {...register("password", { required: "enter password" })}
          />
          {errors?.password?.message && (
            <p className="text-red-500 md:w-[33%]">
              {errors?.password?.message}
            </p>
          )}
        </div>
        <div className="flex gap-2">
          <label
            htmlFor="confirmPassword"
            className="w-1/2 md:text-1xl font-bold md:w-[33%]"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-1/2 ring-1 ring-gray-400 rounded-lg px-2 md:w-[33%] text-black"
            {...register("confirmPassword", {
              required: "this field is required",
              validate: (value) =>
                value === getValues().password || "password didnt match",
            })}
          />
          {errors?.confirmPassword?.message && (
            <p className="text-red-500 md:w-[33%]">
              {errors?.confirmPassword?.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-[#FF6D00] text-white py-1 font-bold rounded-lg md:w-[20%] md:ml-auto md:px-3 md:py-2 md:mt-4"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default UserSignUp;
