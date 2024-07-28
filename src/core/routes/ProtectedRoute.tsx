import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "store/hooks";

const ProtectedRoute = ({ children }: React.PropsWithChildren) => {
  let isAuthenticated: boolean = useAppSelector(
    (state) => state.auth.isAuthenticated
  );

  let location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
