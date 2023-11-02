import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const StyledLayout = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  overflow: hidden;
`;

const StyledMain = styled.main`
  /* overflow-y: hidden; */
  /* overflow-x: hidden; */
`;

const StyledMenu = styled.nav`
  width: 30vw;
  height: 90%;
  /* flex-basis: 30%; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  padding: 10px;
  @media (max-aspect-ratio: 1/1) {
    display: none;
  }
`;

const StyledMobileMenu = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: black;
  display: block;
  size: 40px;
  background-color: aliceblue;
  width: 100px;
  @media (min-aspect-ratio: 1/1) {
    display: none;
  }
`;

const MobileMenuOverlay = styled.div`
  opacity: 0.9;
  position: absolute;
  z-index: 1500;
  background-color: white;
  min-height: 100vh;
  min-width: 100vw;
`;
const SlicedMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Layout = ({ children }) => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <>
      <StyledMobileMenu onClick={() => setShowMobileMenu(true)}>Menu</StyledMobileMenu>
      {showMobileMenu ? (
        <MobileMenuOverlay onClick={() => setShowMobileMenu(false)}>
          <MenuContent />
        </MobileMenuOverlay>
      ) : null}
      <StyledLayout>
        <StyledMain>
          <StyledMenu>
            <MenuContent />
          </StyledMenu>
        </StyledMain>
        {children}
      </StyledLayout>
    </>
  );
};

const MenuContent = () => {
  return (
    <>
      <StaticImage
        src="../images/logo.jpg"
        layout="constrained"
        width={350}
        style={{ margin: "20px" }}
      />
      <SlicedMenu>
        <Link to="/kitchen" style={{ flex: "1 0 29% " }}>
          <StaticImage src="../images/slices/slice1.jpg" />
        </Link>
        <Link to="/" style={{ flex: "1 0 29% " }}>
          <StaticImage src="../images/slices/slice2.jpg" />
        </Link>{" "}
        <Link to="/office" style={{ flex: "1 0 29% " }}>
          <StaticImage src="../images/slices/slice3.jpg" />
        </Link>{" "}
        <Link to="/bathroom" style={{ flex: "1 0 29% " }}>
          <StaticImage src="../images/slices/slice4.jpg" />
        </Link>{" "}
        <Link to="/doors" style={{ flex: "1 0 29% " }}>
          <StaticImage src="../images/slices/slice5.jpg" />
        </Link>{" "}
        <Link to="/bedroom" style={{ flex: "1 0 29% " }}>
          <StaticImage src="../images/slices/slice6.jpg" />
        </Link>
      </SlicedMenu>
      <StaticImage
        src="../images/description.jpg"
        alt="description"
        layout="constrained"
        style={{ margin: "20px" }}
      />
      <StaticImage
        src="../images/carteDeVisite.jpg"
        alt="description"
        layout="constrained"
        style={{ margin: "20px" }}
      />
    </>
  );
};

export default Layout;
