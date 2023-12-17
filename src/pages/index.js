import * as React from "react";
import { StyledCategory, StyledProject } from "../components/bodyLayout";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <StyledCategory>
        <StyledProject>
          <div>Hello</div>
        </StyledProject>
      </StyledCategory>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <html lang="en" />
    <title>JAJRAG</title>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta
      name="description"
      content="JAJRAG is a collective of carpenters based in Brussels. We design and build custom furniture and interiors."
    />

    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"anonymous"} />

    <link
      rel="preload"
      as="style"
      href="https://fonts.googleapis.com/css2?family=Architects+Daughter:wght@400;600;700&display=swap"
    />

    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Architects+Daughter:wght@400;600;700&display=swap"
    />

    <noscript>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Architects+Daughter:wght@400;600;700&display=swap"
      />
    </noscript>
  </>
);
