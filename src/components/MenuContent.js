import React, { useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import styled from "styled-components";
import { useLocation } from "@reach/router";

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

export const MenuContent = ({ roomInView }) => {
  const [isHovered, setIsHovered] = React.useState("#");

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
          onMouseEnter={() => setIsHovered("#kitchen")}
          onMouseLeave={() => setIsHovered("")}
          to="#kitchen"
          style={{ flex: "1 0 29% ", position: "relative" }}
          as="div"
        >
          <StaticImage
            placeholder="none"
            loading="eager"
            src="../images/slices/slice1.jpg"
            style={
              roomInView.includes("#kitchen") || isHovered.includes("#kitchen")
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
            src="../images/slices/slice1.jpg"
            style={
              roomInView.includes("#kitchen") || isHovered.includes("#kitchen")
                ? {}
                : { display: "none" }
            }
          />
        </Link>
        <Link
          onMouseEnter={() => setIsHovered("#living-room")}
          onMouseLeave={() => setIsHovered("")}
          to="#living-room"
          style={{ flex: "1 0 29% ", position: "relative" }}
          as="div"
        >
          <StaticImage
            placeholder="none"
            loading="eager"
            src="../images/slices/slice2.jpg"
            style={
              roomInView.includes("#living-room") || isHovered.includes("#living-room")
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
              !roomInView.includes("#living-room") && !isHovered.includes("#living-room")
                ? { display: "none" }
                : {}
            }
          />
        </Link>
        <Link
          onMouseEnter={() => setIsHovered("#office")}
          onMouseLeave={() => setIsHovered("")}
          to="#office"
          style={{ flex: "1 0 29% ", position: "relative" }}
          as="div"
        >
          <StaticImage
            placeholder="none"
            loading="eager"
            src="../images/slices/slice3.jpg"
            style={
              roomInView.includes("#office") || isHovered.includes("#office")
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
            src="../images/slices/slice3.jpg"
            style={
              !roomInView.includes("#office") && !isHovered.includes("#office")
                ? { display: "none" }
                : {}
            }
          />
        </Link>
        <Link
          onMouseEnter={() => setIsHovered("#bathroom")}
          onMouseLeave={() => setIsHovered("")}
          to="#bathroom"
          style={{ flex: "1 0 29% ", position: "relative" }}
          as="div"
        >
          <StaticImage
            placeholder="none"
            loading="eager"
            src="../images/slices/slice4.jpg"
            style={
              roomInView.includes("#bathroom") || isHovered.includes("#bathroom")
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
            src="../images/slices/slice4.jpg"
            style={
              !roomInView.includes("#bathroom") && !isHovered.includes("#bathroom")
                ? { display: "none" }
                : {}
            }
          />
        </Link>
        <Link
          onMouseEnter={() => setIsHovered("#doors")}
          onMouseLeave={() => setIsHovered("")}
          to="#doors"
          style={{ flex: "1 0 29% ", position: "relative" }}
          as="div"
        >
          <StaticImage
            placeholder="none"
            loading="eager"
            src="../images/slices/slice5.jpg"
            style={
              roomInView.includes("#doors") || isHovered.includes("#doors")
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
            src="../images/slices/slice5.jpg"
            style={
              !roomInView.includes("#doors") && !isHovered.includes("#doors")
                ? { display: "none" }
                : {}
            }
          />
        </Link>
        <Link
          onMouseEnter={() => setIsHovered("#bedroom")}
          onMouseLeave={() => setIsHovered("")}
          to="#bedroom"
          style={{ flex: "1 0 29% ", position: "relative" }}
          as="div"
        >
          <StaticImage
            placeholder="none"
            loading="eager"
            src="../images/slices/slice6.jpg"
            style={
              roomInView.includes("#bedroom") || isHovered.includes("#bedroom")
                ? { opacity: 0, display: "none" }
                : { opacity: 1, transition: "opacity 1s ease-in-out" }
            }
          />

          <StaticImage
            placeholder="none"
            loading="eager"
            as="a"
            transformOptions={{
              duotone: { highlight: "#FFFFFF", shadow: "#39328b", opacity: "100" },
            }}
            src="../images/slices/slice6.jpg"
            style={
              !roomInView.includes("#bedroom") && !isHovered.includes("#bedroom")
                ? { display: "none" }
                : {}
            }
          />
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
