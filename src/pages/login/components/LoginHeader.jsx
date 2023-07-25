import Logo from "../../../assets/images/logo.png";
const LoginHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="w-32 ">
        <img className="w-full rounded-full" src={Logo} alt="logo" />
      </div>

      <h1 className="md:text-[1.3rem] font-bold">
        Welcome Back to Accomoda Track
      </h1>
    </div>
  );
};

export default LoginHeader;
