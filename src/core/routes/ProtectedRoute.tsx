import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }: React.PropsWithChildren) => {
  let isAuthenticated: boolean = useSelector(
    (state: any) => state.auth.isAuthenticated
  );

  let location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
