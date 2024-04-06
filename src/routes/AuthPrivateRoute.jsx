import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const AuthPrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-100px)]">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  if (!user) {
    return children;
  }

  return <Navigate to="/" />;
};

export default AuthPrivateRoute;
