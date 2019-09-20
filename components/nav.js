import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
const links = [
  { href: "/", label: "Home" },
  { href: "/goalies", label: "Goalies" },
  { href: "/by-position", label: "Skaters by position" },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const StyledNav = styled.nav`
  text-align: center;
  background-color: #3d3d3d;
`;

const StyledNavList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 1rem;
  margin: 0;
`;

const StyledNavListItem = styled.li`
  display: flex;
  padding: 6px 8px;
`;

const StyledNavLink = styled.a(
  ({ isActive }) => `
  color: #c8d6e5;
  text-decoration: ${isActive ? "underline" : "none"};
  font-size: 1rem;
`
);

const Nav = () => {
  // useRouter is experimental USE AT OWN RISK
  const router = useRouter();
  return (
    <StyledNav>
      <StyledNavList>
        {links.map(({ key, href, label }) => (
          <StyledNavListItem key={key}>
            <Link href={href} passHref>
              <StyledNavLink isActive={router.pathname === href ? true : false}>
                {label}
              </StyledNavLink>
            </Link>
          </StyledNavListItem>
        ))}
      </StyledNavList>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
        }
      `}</style>
    </StyledNav>
  );
};

export default Nav;
