import styled from "styled-components";

export const StyledCategory = styled.div`
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
export const StyledProject = styled.div`
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
