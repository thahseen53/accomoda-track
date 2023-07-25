import { useNavigate } from "react-router-dom";
import { useUser } from "./login/useUser";
import { useEffect } from "react";

const Protected = ({ children }) => {
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading } = useUser();
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading, navigate]);
  if (isAuthenticated) return children;
};

export default Protected;
