import React, { useEffect, useState } from "react";
import HomeLogoSvg from "./homeLogoSvg";
import { StyledNavbar, StyledMenu, StyledMenuItem, StyledLink } from "./style";
import { getUserData } from "../Authentication/authenticationUtils";
import { SIGNIN } from "./navPaths";
import LogoutButton from "./logoutButton";

interface NavItem {
  item: string;
  path: string;
  isSignInRequired: boolean;
}

interface NavbarProps {
  navItems: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
  const [isUserSignedIn, setIsUserSignedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const checkSignInStatus = async () => {
      const userData = await getUserData();
      setIsUserSignedIn(userData !== null);
    };
    checkSignInStatus();
  }, []);

  return (
    <StyledNavbar style={{ padding: "0 60px 10px 20px" }}>
      <div>
        <HomeLogoSvg />
      </div>
      <StyledMenu>
        {navItems.map(({ item, path, isSignInRequired }, index) => (
          <StyledMenuItem key={index}>
            {(isUserSignedIn || !isSignInRequired) && (
              <StyledLink href={path}>{item}</StyledLink>
            )}
          </StyledMenuItem>
        ))}
        {isUserSignedIn ? (
          <LogoutButton />
        ) : (
          <StyledLink href={SIGNIN.path}>{SIGNIN.item}</StyledLink>
        )}
      </StyledMenu>
    </StyledNavbar>
  );
};

export default Navbar;
