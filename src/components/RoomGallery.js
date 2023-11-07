import * as React from "react";

// import Img from "gatsby-image";

import { GatsbyImage } from "gatsby-plugin-image";

import { StyledProject } from "../components/bodyLayout";

const RoomGallery = ({ data }) => {
  return (
    <>
      {data.group.map((group) => (
        <StyledProject>
          {group.edges.map((edge) => (
            <GatsbyImage
              key={edge.node.id}
              alt={"image"}
              image={edge.node.childImageSharp.gatsbyImageData}
              className="image"
              objectFit="contain"
              loading="eager"
            />
          ))}
        </StyledProject>
      ))}
    </>
  );
};

export default RoomGallery;
