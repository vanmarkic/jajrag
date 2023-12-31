import React from "react";
import styled from "styled-components";
import { MenuContent } from "./MenuContent";
import GlobalStyle from "../styles/global";
import { useLocation } from "@reach/router";

const StyledLayout = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

const SidePanel = styled.nav`
  width: 30vw;
  max-height: 100svh;
  row-gap: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  padding: 48px;
  align-self: flex-end;
  margin-bottom: 30px;
  @media (max-aspect-ratio: 1/1) {
    display: none;
  }
`;

const StyledMenuButton = styled.button`
  position: fixed;
  bottom: 6px;
  right: 10px;
  color: #191919;
  size: 40px;
  border: 3px solid #191919 !important;
  border-radius: 5px !important;
  background-color: white !important;
  width: 100px;
  z-index: 1000;
  font-weight: bold;
  font-size: 16px;
  font-family: "Architects Daughter" !important;
  cursor: pointer;
  height: 40px;
  @media (min-aspect-ratio: 1/1) {
    display: none;
  }
`;
const CategoryHeader = styled.h4`
  position: fixed;
  top: 7px;
  left: 10px;
  color: #191919;
  font-size: 24px;
  z-index: 1001;
  @media (min-aspect-ratio: 1/1) {
    display: none;
  }
`;

const MobileMenuOverlay = styled.div`
  position: absolute;
  z-index: 1500;
  background-color: white;
  height: 100svh;
  padding: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-width: 100%;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2svw;
  &.proximity {
    scroll-snap-type: y proximity;
  }
  overflow: scroll;
  height: 100svh;
  scroll-snap-type: y mandatory;
  width: 100%;
  @media (min-aspect-ratio: 1/1) {
    width: 70vw;
  }
`;

const Layout = ({ children, roomInView }) => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const { pathname } = useLocation();

  const currentRoom = pathname.split("/");
  React.useEffect(() => {
    const documentHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
    };
    window.addEventListener("resize", documentHeight);
    documentHeight();
  }, []);

  return (
    <>
      <GlobalStyle />
      <StyledMenuButton onClick={() => setShowMobileMenu(true)}>MENU</StyledMenuButton>
      <CategoryHeader>{currentRoom[currentRoom.length - 2].toUpperCase()}</CategoryHeader>
      {showMobileMenu ? (
        <MobileMenuOverlay onClick={() => setShowMobileMenu(false)}>
          <MenuContent roomInView={roomInView} />
          <StyledMenuButton onClick={() => setShowMobileMenu(false)}>
            CLOSE
          </StyledMenuButton>
        </MobileMenuOverlay>
      ) : null}
      <StyledLayout>
        <SidePanel>
          <MenuContent roomInView={roomInView} />
        </SidePanel>
        <Main>{children}</Main>
      </StyledLayout>
    </>
  );
};

export default Layout;
