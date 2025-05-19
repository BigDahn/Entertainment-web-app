import React, { useEffect } from "react";
import { useAuth } from "../context/Authentication";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading, dispatch } = useAuth();

  const navigate = useNavigate();
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "loading" });
    }, 1000);
  });

  if (isLoading) {
    return (
      <div className="m-auto w-full flex items-center  h-[100vh] justify-center">
        <Loading />
      </div>
    );
  }
  if (isAuthenticated) {
    return <>{children}</>;
  }
}

export default ProtectedRoute;

/*   */
