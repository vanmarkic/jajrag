import styled from "styled-components";

export const StyledCategory = styled.div`
  /* width: 70vw; */
  /* margin-left: 30vw; */
  display: flex;
  flex-direction: column;
  /* min-height: 100vh; */
  &.proximity {
    scroll-snap-type: y proximity;
  }
  overflow: scroll;
  height: 100svh;
  scroll-snap-type: y mandatory;
  /* row-gap: 40px; */
`;
export const StyledProject = styled.div`
  min-height: 100vh;
  display: flex;
  row-gap: 5px;
  column-gap: 5px;
  scroll-snap-align: center;
  @media (max-aspect-ratio: 1/1) {
    flex-direction: column;
    padding: 40px 10px;
    min-height: 100svh;
    justify-content: center;
  }
`;
