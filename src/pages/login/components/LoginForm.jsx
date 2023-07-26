import { useState } from "react";
import { useLogin } from "../loginHooks/useLogin";
import { loginGuest } from "../../../services/apiAuthentication";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser, isLoading } = useLogin();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    loginUser({ email, password });
  };
  // const handleClick = () => {
  //   loginGuest();
  // };
  return (
    <div className="py-2">
      <form className="flex flex-col gap-3 w-full py-2" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <label className="font-semibold" htmlFor="email">
            Enter email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@mail.com"
            className="h-8 focus:outline-violet-500 ring-1 ring-slate-300 p-2 rounded-lg text-[#240046] font-semibold"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label className="font-semibold" htmlFor="email">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-8   focus:outline-violet-500 ring-1 ring-slate-300 p-2 rounded-lg text-[#240046]"
          />
        </div>
        <button
          type="submit"
          className="p-2 text-white font-bold my-2 rounded-lg bg-[#FF8500]"
        >
          Login
        </button>
      </form>
      {/* <button
        type="submit"
        className="p-2 text-white font-bold my-2 rounded-lg bg-[#FF8500]"
        onClick={() => handleClick}
      >
        Login as guest
      </button> */}
    </div>
  );
};

export default LoginForm;
