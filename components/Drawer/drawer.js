import React from "react";
import styled from "@emotion/styled";

// I ripped the styling from https://medium.com/@axionoso/step-by-step-guide-to-react-sliding-drawer-e0f8facf3bab
const StyledDrawer = styled.div(
  ({ isOpen }) => `
    height: 100%;
    background: #f1f1f1;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    z-index: 200;
    box-shadow: 1px 0px 7px rgba(0,0,0,0.5); 
    transform: ${isOpen ? "transform: translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease-out;
`
);

const Drawer = ({ isOpen, children }) => (
  <StyledDrawer isOpen={isOpen}>{children}</StyledDrawer>
);
Drawer.defaultProps = {
  isOpen: false,
};

export default Drawer;
