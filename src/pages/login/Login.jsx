import LoginForm from "./components/LoginForm";
import LoginHeader from "./components/LoginHeader";

const Login = () => {
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center   bg-[#240046]">
      <div className="flex flex-col bg-[#3C096C] w-full md:w-2/6 p-8 rounded-lg text-white">
        <LoginHeader />
        <LoginForm />
      </div>
    </div>
  );
};
export default Login;
