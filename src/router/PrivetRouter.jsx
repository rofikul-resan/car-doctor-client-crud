import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRouter = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  if (user) {
    return children;
  } else {
    return (
      <Navigate to={"/auth/login"} state={location.pathname} replace={true} />
    );
  }
};

export default PrivetRouter;
