import styled from "styled-components";

export const StyledNavbar = styled.nav`
  && {
    color: ${(props) => props.theme.colors.primary};
    padding-left: calc(2rem * var(--padding-ratio));
    padding-right: calc(1rem * var(--padding-ratio));
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledMenu = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`;

export const StyledMenuItem = styled.li`
  margin-right: 1rem;
  color: ${(props) => props.theme.colors.textColor};
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const StyledLogoutButton = styled.button`
  padding: 8px;
  background-color: ${(props) => props.theme.colors.secondary};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.textColor}
  text-decoration: none; 
  text-align: center;
  display: inline-block;
  margin-right: 10px; 

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    border-color: ${(props) => props.theme.colors.textColor};
    border: solid;
  }
`;
