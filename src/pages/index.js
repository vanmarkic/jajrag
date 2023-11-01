import * as React from "react";
import styled from "styled-components";

import { StaticImage } from "gatsby-plugin-image";

import { graphql } from "gatsby";
import Img from "gatsby-image";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  overflowY: "hidden",
};
const headingStyles = {
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};

const StyledMain = styled.main`
  overflow-y: hidden;
`;

const StyledMenu = styled.nav`
  width: 30vw;
  height: 100vh;
  position: fixed;
  flex-basis: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
const StyledCategory = styled.div`
  width: 70%;
  margin-left: 30vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  border: 1px solid gray;
  &.proximity {
    scroll-snap-type: y proximity;
  }
  overflow: scroll;
  height: 100vh;
  scroll-snap-type: y mandatory;
`;
const StyledProject = styled.div`
  min-height: 100%;
  background-color: yellow;
  width: 100%;
  border: 1px solid black;
  scroll-snap-align: start;
  position: relative;
`;

const projects = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/getting-started/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
];

const IndexPage = ({ data }) => {
  return (
    <StyledMain>
      <StyledMenu>
        <StaticImage src="../images/logo.jpg" layout="constrained" width={350} />
        <StaticImage src="../images/menu.jpg" alt="A dinosaur" layout="constrained" />
        <StaticImage
          src="../images/description.jpg"
          alt="description"
          layout="constrained"
        />
        <StaticImage
          src="../images/carteDeVisite.jpg"
          alt="description"
          layout="constrained"
        />
      </StyledMenu>
      <StyledCategory>
        {projects.map((link) => (
          <StyledProject>tesdt</StyledProject>
        ))}
      </StyledCategory>
    </StyledMain>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

export const query = graphql`
  query {
    allImageSharp {
      edges {
        node {
          id
          fixed(width: 350) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`;
