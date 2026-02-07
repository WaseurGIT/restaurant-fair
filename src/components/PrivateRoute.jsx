import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
  const { user, isAdmin } = useContext(AuthContext);

  useEffect(() => {
    if (user && !isAdmin(user)) {
      Swal.fire({
        title: "Access Denied",
        text: "Only admins can access this page. Please login with admin credentials.",
        icon: "warning",
        confirmButtonText: "Go to Home",
      }).then(() => {
        window.location.href = "/";
      });
    }
  }, [user, isAdmin]);

  if (isAdmin(user)) {
    return children;
  }

  if (!user) {
    return <Navigate to="/login" replace></Navigate>;
  }

  return <Navigate to="/" replace></Navigate>;
};

export default PrivateRoute;
