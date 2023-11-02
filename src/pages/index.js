import * as React from "react";
import styled from "styled-components";

import { StaticImage } from "gatsby-plugin-image";

import { graphql } from "gatsby";
import Layout from "../components/layout";

const StyledCategory = styled.div`
  width: 70vw;
  margin-left: 30vw;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  &.proximity {
    scroll-snap-type: y proximity;
  }
  overflow: scroll;
  height: 100vh;
  scroll-snap-type: y mandatory;
  row-gap: 40px;
`;
const StyledProject = styled.div`
  min-height: calc(100% - 40px);
  /* padding: 10px; */
  display: flex;
  background-color: #f5f5f5;
  background-blend-mode: hard-light;
  width: 100vw;
  /* flex-direction: column; */
  row-gap: 5px;
  border: 1px solid black;
  scroll-snap-align: center;
`;

const IndexPage = ({ data }) => {
  const [fullScreen, setFullScreen] = React.useState(false);
  console.log(data);
  return (
    <Layout>
      <StyledCategory>Hello</StyledCategory>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>JAJRAG</title>;
