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
        src="../images/logo.jpg"
        layout="constrained"
        alt="jajrag"
        width={350}
        style={{ margin: "20px" }}
      />
      <SlicedMenu>
        <Link getProps={handleIsCurrent} to="/kitchen" style={{ flex: "1 0 29% " }}>
          {currentRoute === "/kitchen/" || isHovered === "/kitchen/" ? (
            <StaticImage
              as="a"
              transformOptions={{
                duotone: { highlight: "#FFFFFF", shadow: "#39328b", opacity: "100" },
              }}
              src="../images/slices/slice1.jpg"
              style={{ boxShadow: "0 0 8px 8px white inset" }}
            />
          ) : (
            <StaticImage
              onMouseEnter={() => setIsHovered("/kitchen/")}
              onMouseLeave={() => setIsHovered("")}
              src="../images/slices/slice1.jpg"
            />
          )}
        </Link>
        <Link getProps={handleIsCurrent} to="/" style={{ flex: "1 0 29% " }}>
          <StaticImage
            as="a"
            onMouseEnter={() => setIsHovered("/kitchen/")}
            onMouseLeave={() => setIsHovered("")}
            src="../images/slices/slice2.jpg"
          />
        </Link>
        <Link getProps={handleIsCurrent} to="/kitchen" style={{ flex: "1 0 29% " }}>
          <StaticImage as="a" src="../images/slices/slice3.jpg" />
        </Link>
        <Link getProps={handleIsCurrent} to="/kitchen" style={{ flex: "1 0 29% " }}>
          <StaticImage as="a" src="../images/slices/slice4.jpg" />
        </Link>
        <Link getProps={handleIsCurrent} to="/kitchen" style={{ flex: "1 0 29% " }}>
          <StaticImage as="a" src="../images/slices/slice5.jpg" />
        </Link>
        <Link getProps={handleIsCurrent} to="/kitchen" style={{ flex: "1 0 29% " }}>
          <StaticImage as="a" src="../images/slices/slice6.jpg" />
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
