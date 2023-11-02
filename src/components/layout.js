import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link, navigate } from "gatsby";

const StyledLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  #main-content {
    width: 100%;
    max-width: 62.5rem;
    margin: 0 auto;
    padding: 0 2.5rem;
  }
`;

const StyledMain = styled.main`
  /* overflow-y: hidden; */
  /* overflow-x: hidden; */
`;

const StyledMenu = styled.nav`
  width: 30vw;
  height: 100vh;
  position: fixed;
  flex-basis: 30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
`;

const SlicedMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <StyledMain>
        <StyledMenu>
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
            <Link to="/living-room" style={{ flex: "1 0 29% " }}>
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
          {/* <StaticImage
            src="../images/menu.jpg"
            layout="constrained"
            useMap="#image-map"
          /> */}
          <StaticImage
            src="../images/description.jpg"
            alt="description"
            layout="constrained"
            style={{ margin: "20px" }}
          />

          {/* <img src="src/images/menu.jpg" usemap="#image-map" /> */}

          {/* <map name="image-map">
            <area
              target=""
              alt="Kitchen"
              title="Kitchen"
              href=""
              coords="0,0,140,140"
              shape="rect"
              onClick={() => console.log("Kitchen")}
              onMouseOver={(e) => (e.target.style.backgroundColor = "red")}
            />

            <area
              target=""
              alt="LivingRoom"
              title="LivingRoom"
              href=""
              backgroundColor="red"
              coords="140,0,240,140"
              shape="rect"
              // onMouseOver={() => console.log("LivingRoom")}
              zIndex={1000}
              onMouseOver={(e) => (e.target.style.backgroundBlendMode = "hard-light")}
            /> */}
          {/* <area
              target=""
              alt="Office"
              title="Office"
              href=""
              coords="1969,-1,2985,1017"
              shape="rect"
              onMouseOver={() => console.log("Office")}
            />
            <area
              target=""
              alt="Bathroom"
              title="Bathroom"
              href=""
              coords="3,999,1029,2031"
              shape="rect"
              onMouseOver={() => console.log("Bathroom")}
            />
            <area
              target=""
              alt="Doors"
              title="Doors"
              href=""
              coords="1022,991,1974,2028"
              shape="rect"
              onMouseOver={() => console.log("Doors")}
            />
            <area
              target=""
              alt="Bedroom"
              title="Bedroom"
              href=""
              coords="1959,1004,2985,2028"
              shape="rect"
              onMouseOver={() => console.log("Bedroom")}
            /> */}
          {/* </map> */}
          <StaticImage
            src="../images/carteDeVisite.jpg"
            alt="description"
            layout="constrained"
            style={{ margin: "20px" }}
          />
        </StyledMenu>
      </StyledMain>
      {children}
    </StyledLayout>
  );
};

export default Layout;
