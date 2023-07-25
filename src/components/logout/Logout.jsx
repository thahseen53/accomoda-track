import { useLogout } from "../../hooks/useLogout";

const Logout = () => {
  const { userLogout } = useLogout();
  return (
    <div>
      <button onClick={userLogout}>Logout</button>
    </div>
  );
};

export default Logout;
