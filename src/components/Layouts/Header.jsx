import Logout from "../logout/logout";
import UserDetails from "./UserDetails";

const Header = () => {
  return (
    <div>
      <div className="flex items-center gap-4 justify-end p-2 rounded-lg">
        <UserDetails />
        <Logout />
      </div>
    </div>
  );
};

export default Header;
