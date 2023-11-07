import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import styled from "styled-components";
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

export const MenuContent = () => {
  const [currentRoute, setCurrentRoute] = React.useState("/");
  const [isHovered, setIsHovered] = React.useState("/");

  const handleIsCurrent = ({ href, isCurrent }) => {
    if (isCurrent) setCurrentRoute(href);
  };
  return (
    <>
      <StaticImage
        placeholder="none"
        loading="eager"
        src="../images/logo.jpg"
        layout="constrained"
        alt="jajrag"
        width={350}
        style={{ margin: "20px" }}
      />
      <SlicedMenu>
        <Link
          getProps={handleIsCurrent}
          onMouseEnter={() => setIsHovered("/kitchen/")}
          onMouseLeave={() => setIsHovered("")}
          to="/kitchen"
          style={{ flex: "1 0 29% " }}
        >
          {currentRoute === "/kitchen/" || isHovered === "/kitchen/" ? (
            <StaticImage
              placeholder="none"
              loading="eager"
              as="a"
              transformOptions={{
                duotone: { highlight: "#FFFFFF", shadow: "#39328b", opacity: "100" },
              }}
              src="../images/slices/slice1.jpg"
              style={{ boxShadow: "0 0 8px 8px white inset" }}
            />
          ) : (
            <StaticImage
              placeholder="none"
              loading="eager"
              src="../images/slices/slice1.jpg"
            />
          )}
        </Link>
        <Link
          onMouseEnter={() => setIsHovered("/living-room/")}
          onMouseLeave={() => setIsHovered("")}
          getProps={handleIsCurrent}
          to="/living-room"
          style={{ flex: "1 0 29% ", position: "relative" }}
          as="div"
        >
          <StaticImage
            placeholder="none"
            loading="eager"
            src="../images/slices/slice2.jpg"
            style={
              currentRoute === "/living-room/" || isHovered === "/living-room/"
                ? { display: "none" }
                : {}
            }
          />

          <StaticImage
            placeholder="none"
            loading="eager"
            as="a"
            transformOptions={{
              duotone: { highlight: "#FFFFFF", shadow: "#39328b", opacity: "100" },
            }}
            src="../images/slices/slice2.jpg"
            style={
              currentRoute !== "/living-room/" && isHovered !== "/living-room/"
                ? { display: "none" }
                : {}
            }
          />
        </Link>
        <Link
          onMouseEnter={() => setIsHovered("/office/")}
          onMouseLeave={() => setIsHovered("")}
          getProps={handleIsCurrent}
          to="/office"
          style={{ flex: "1 0 29% " }}
        >
          {currentRoute === "/office/" || isHovered === "/office/" ? (
            <StaticImage
              placeholder="none"
              loading="eager"
              as="a"
              transformOptions={{
                duotone: { highlight: "#FFFFFF", shadow: "#39328b", opacity: "100" },
              }}
              src="../images/slices/slice3.jpg"
              style={{ boxShadow: "0 0 8px 8px white inset" }}
            />
          ) : (
            <StaticImage
              placeholder="none"
              loading="eager"
              src="../images/slices/slice3.jpg"
            />
          )}
        </Link>
        <Link
          onMouseEnter={() => setIsHovered("/kitchen/")}
          onMouseLeave={() => setIsHovered("")}
          getProps={handleIsCurrent}
          to="/kitchen"
          style={{ flex: "1 0 29% " }}
        >
          {currentRoute === "/kitchen/" || isHovered === "/kitchen/" ? (
            <StaticImage
              placeholder="none"
              loading="eager"
              as="a"
              transformOptions={{
                duotone: { highlight: "#FFFFFF", shadow: "#39328b", opacity: "100" },
              }}
              src="../images/slices/slice4.jpg"
              style={{ boxShadow: "0 0 8px 8px white inset" }}
            />
          ) : (
            <StaticImage
              placeholder="none"
              loading="eager"
              src="../images/slices/slice4.jpg"
            />
          )}
        </Link>
        <Link
          onMouseEnter={() => setIsHovered("/doors/")}
          onMouseLeave={() => setIsHovered("")}
          getProps={handleIsCurrent}
          to="/doors"
          style={{ flex: "1 0 29% " }}
        >
          {currentRoute === "/doors/" || isHovered === "/doors/" ? (
            <StaticImage
              placeholder="none"
              loading="eager"
              as="a"
              transformOptions={{
                duotone: { highlight: "#FFFFFF", shadow: "#39328b", opacity: "100" },
              }}
              src="../images/slices/slice5.jpg"
              style={{ boxShadow: "0 0 8px 8px white inset" }}
            />
          ) : (
            <StaticImage
              placeholder="none"
              loading="eager"
              src="../images/slices/slice5.jpg"
            />
          )}
        </Link>
        <Link
          onMouseEnter={() => setIsHovered("/kitchen/")}
          onMouseLeave={() => setIsHovered("")}
          getProps={handleIsCurrent}
          to="/kitchen"
          style={{ flex: "1 0 29% " }}
        >
          {currentRoute === "/kitchen/" || isHovered === "/kitchen/" ? (
            <StaticImage
              placeholder="none"
              loading="eager"
              as="a"
              transformOptions={{
                duotone: { highlight: "#FFFFFF", shadow: "#39328b", opacity: "100" },
              }}
              src="../images/slices/slice6.jpg"
              style={{ boxShadow: "0 0 8px 8px white inset" }}
            />
          ) : (
            <StaticImage
              placeholder="none"
              loading="eager"
              src="../images/slices/slice6.jpg"
            />
          )}
        </Link>
      </SlicedMenu>
      <StaticImage
        placeholder="none"
        loading="eager"
        src="../images/description.jpg"
        alt="description"
        layout="constrained"
        width={350}
        style={{ margin: "5px" }}
      />
      <StyledContact>
        <StaticImage
          placeholder="none"
          loading="eager"
          src="../images/contact.jpg"
          alt="contact"
          width={100}
          layout="fixed"
          style={{ margin: "5px" }}
        />
        <StaticImage
          placeholder="none"
          loading="eager"
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
