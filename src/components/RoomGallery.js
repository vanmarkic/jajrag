import * as React from "react";

import Img from "gatsby-image";

import { StyledProject } from "../components/bodyLayout";

const RoomGallery = ({ data }) => {
  return (
    <>
      {data.group.map((group) => (
        <StyledProject>
          {group.edges.map((edge) => (
            <Img key={edge.node.id} fluid={edge.node.childImageSharp.fluid} />
          ))}
        </StyledProject>
      ))}
    </>
  );
};

export default RoomGallery;
