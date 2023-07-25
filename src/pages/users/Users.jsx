import UserSignUp from "./components/UserSignUp";

const Users = () => {
  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-bold text-center">
        Create a new user
      </h1>
      <UserSignUp />
    </div>
  );
};

export default Users;
