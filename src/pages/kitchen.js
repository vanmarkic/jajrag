import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";

import { StyledCategory, StyledProject } from "../components/bodyLayout";

import Layout from "../components/layout";

const KitchenPage = () => {
  return (
    <Layout>
      <StyledCategory>
        <StyledProject>
          <StaticImage
            src="../images/kitchen1/1.jpeg"
            alt="description"
            objectFit="contain"
          />
          <StaticImage
            src="../images/kitchen1/2.jpeg"
            alt="description"
            objectFit="contain"
          />
        </StyledProject>
        <StyledProject>
          <StaticImage
            src="../images/kitchen2/1.jpg"
            alt="description"
            objectFit="contain"
          />
          <StaticImage
            src="../images/kitchen2/2.jpeg"
            alt="description"
            objectFit="contain"
          />
        </StyledProject>
      </StyledCategory>
    </Layout>
  );
};

export default KitchenPage;

export { Head } from "./index";
