import { useUser } from "../../pages/login/useUser";
import DefaultUser from "../../assets/images/deaultUser.png";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const { user } = useUser();
  const { avatar, fullName } = user.user_metadata;
  const naviagte = useNavigate();
  return (
    <div className="flex items-center gap-2 mx-2">
      <img className="w-6" src={avatar || DefaultUser} />
      <span className="cursor-pointer" onClick={() => naviagte("/accounts")}>
        {fullName}
      </span>
    </div>
  );
};

export default UserDetails;
