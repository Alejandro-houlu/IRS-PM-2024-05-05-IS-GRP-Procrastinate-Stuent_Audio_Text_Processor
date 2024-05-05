import React from "react";
import { logout } from "../Authentication/authenticationUtils";
import { StyledLogoutButton } from "./style";
import router from "next/router";
import { HOME } from "./navPaths";

const LogoutButton: React.FC = () => {
  const handleLogout = () => {
    logout();
    router.replace(HOME.path).then(() => {
      window.location.reload();
    });
  };

  return <StyledLogoutButton onClick={handleLogout}>Logout</StyledLogoutButton>;
};

export default LogoutButton;
