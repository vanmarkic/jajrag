import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import GlobalStyle from "../styles/global";
import { Head } from "../pages";

const StyledLayout = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

const SideMenu = styled.nav`
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
  bottom: 10px;
  right: 10px;
  color: black;
  size: 40px;
  background-color: aliceblue;
  width: 100px;
  z-index: 1000;
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
const SlicedMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-aspect-ratio: 1/1) {
    max-width: 350px;
  }
`;
const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }) => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
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
      <Head />
      <GlobalStyle />
      <StyledMenuButton onClick={() => setShowMobileMenu(true)}>Menu</StyledMenuButton>
      {showMobileMenu ? (
        <MobileMenuOverlay onClick={() => setShowMobileMenu(false)}>
          <MenuContent />
        </MobileMenuOverlay>
      ) : null}
      <StyledLayout>
        <SideMenu>
          <MenuContent />
        </SideMenu>
        {children}
      </StyledLayout>
    </>
  );
};

const activeLink = {};

const MenuContent = () => {
  const [currentRoute, setCurrentRoute] = React.useState("/");

  const handleIsCurrent = ({ href, isCurrent }) => {
    if (isCurrent) setCurrentRoute(href);
  };
  return (
    <>
      <StaticImage
        src="../images/logo.jpg"
        layout="constrained"
        alt="jajrag"
        width={350}
        style={{ margin: "20px" }}
      />
      <SlicedMenu>
        <Link getProps={handleIsCurrent} to="/kitchen" style={{ flex: "1 0 29% " }}>
          {currentRoute === "/kitchen/" ? (
            <StaticImage
              transformOptions={{
                duotone: { highlight: "#B4B4B4", shadow: "#000000", opacity: "50" },
              }}
              src="../images/slices/slice1.jpg"
            />
          ) : (
            <StaticImage src="../images/slices/slice1.jpg" />
          )}
        </Link>
        <Link getProps={handleIsCurrent} to="/" style={{ flex: "1 0 29% " }}>
          <StaticImage src="../images/slices/slice2.jpg" />
        </Link>
        <Link getProps={handleIsCurrent} to="/kitchen" style={{ flex: "1 0 29% " }}>
          <StaticImage src="../images/slices/slice3.jpg" />
        </Link>
        <Link getProps={handleIsCurrent} to="/kitchen" style={{ flex: "1 0 29% " }}>
          <StaticImage src="../images/slices/slice4.jpg" />
        </Link>
        <Link getProps={handleIsCurrent} to="/kitchen" style={{ flex: "1 0 29% " }}>
          <StaticImage src="../images/slices/slice5.jpg" />
        </Link>
        <Link getProps={handleIsCurrent} to="/kitchen" style={{ flex: "1 0 29% " }}>
          <StaticImage src="../images/slices/slice6.jpg" />
        </Link>
      </SlicedMenu>
      <StaticImage
        src="../images/description.jpg"
        alt="description"
        layout="constrained"
        width={350}
        style={{ margin: "5px" }}
      />
      <StyledContact>
        <StaticImage
          src="../images/contact.jpg"
          alt="contact"
          width={100}
          layout="fixed"
          style={{ margin: "5px" }}
        />
        <StaticImage
          src="../images/carteDeVisite.jpg"
          alt="email"
          layout="constrained"
          style={{ margin: "5px" }}
          width={200}
        />
      </StyledContact>
    </>
  );
};

export default Layout;
