import * as React from "react";

import Layout from "../components/layout";

import { styled } from "styled-components";
import { useInView } from "react-intersection-observer";

export default function HomePage() {
  const [roomInView, setRoomInView] = React.useState("");

  const handleSetInView = (room) => {
    console.log(room);
    setRoomInView(room);
  };
  return (
    <Layout roomInView={roomInView}>
      {ROOMS.map((room) => (
        <Room {...room} setInView={handleSetInView} />
      ))}
    </Layout>
  );
}

export { Head } from ".";

const StyledProject = styled.div`
  min-height: 100vh;
  display: flex;
  scroll-snap-align: center;
  justify-content: space-evenly;
  align-items: center;
  @media (max-aspect-ratio: 1/1) {
    flex-direction: column;
    /* min-height: 100%; */
    /* min-width: auto; */
    padding: 40px 10px;
    min-height: 100svh;
    align-items: center;
    justify-content: center;
  }
`;

const Room = ({ imageUrl, description, name }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  React.useEffect(() => {
    if (inView) {
      window.history.pushState({}, window.title, "#" + name);
    }
  }, [inView]);

  return (
    <StyledProject id={name} className="p-2 m-auto">
      <div className="flex items-end gap-8">
        <img ref={ref} src={imageUrl} width={400} />
        <p className="text-sm">{description}</p>
      </div>
    </StyledProject>
  );
};

const ROOMS = [
  {
    name: "kitchen",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum risus nisl, gravida rutrum porttitor vitae, consequat vel lacus. Nunc imperdiet ipsum eros, sed consectetur dolor tincidunt ornare. Duis condimentum orcipurus, quis sagittis felis ornare vitae. Integer suscipit, nisl at feugiat vulputate, ligula metus congue magna, a eleifend mi velit molestie lorem. Fusce vel mauris ac augue sodales faucibus. Sed molestie diam quis justo aliquam tempor. Pellentesque quis justo sapien. Suspendisse a volutpat quam. Sed sed nisl sit amet ipsum feugiat molestie non ut ante. Morbi massa turpis,mattis in est non, elementum facilisis ligula. Ut molestie et lacus egetelementum.",
    imageUrl: "./projects/kitchen/kitchen1/1.jpeg",
  },
  {
    name: "living-room",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum risus nisl, gravida rutrum porttitor vitae, consequat vel lacus. Nunc imperdiet ipsum eros, sed consectetur dolor tincidunt ornare. Duis condimentum orcipurus, quis sagittis felis ornare vitae. Integer suscipit, nisl at feugiat vulputate, ligula metus congue magna, a eleifend mi velit molestie lorem. Fusce vel mauris ac augue sodales faucibus. Sed molestie diam quis justo aliquam tempor. Pellentesque quis justo sapien. Suspendisse a volutpat quam. Sed sed nisl sit amet ipsum feugiat molestie non ut ante. Morbi massa turpis,mattis in est non, elementum facilisis ligula. Ut molestie et lacus egetelementum.",
    imageUrl: "./projects/living-room/lr1/1.jpeg",
  },
  {
    name: "office",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum risus nisl, gravida rutrum porttitor vitae, consequat vel lacus. Nunc imperdiet ipsum eros, sed consectetur dolor tincidunt ornare. Duis condimentum orcipurus, quis sagittis felis ornare vitae. Integer suscipit, nisl at feugiat vulputate, ligula metus congue magna, a eleifend mi velit molestie lorem. Fusce vel mauris ac augue sodales faucibus. Sed molestie diam quis justo aliquam tempor. Pellentesque quis justo sapien. Suspendisse a volutpat quam. Sed sed nisl sit amet ipsum feugiat molestie non ut ante. Morbi massa turpis,mattis in est non, elementum facilisis ligula. Ut molestie et lacus egetelementum.",
    imageUrl: "./projects/office/office1/1.jpeg",
  },
  {
    name: "doors",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum risus nisl, gravida rutrum porttitor vitae, consequat vel lacus. Nunc imperdiet ipsum eros, sed consectetur dolor tincidunt ornare. Duis condimentum orcipurus, quis sagittis felis ornare vitae. Integer suscipit, nisl at feugiat vulputate, ligula metus congue magna, a eleifend mi velit molestie lorem. Fusce vel mauris ac augue sodales faucibus. Sed molestie diam quis justo aliquam tempor. Pellentesque quis justo sapien. Suspendisse a volutpat quam. Sed sed nisl sit amet ipsum feugiat molestie non ut ante. Morbi massa turpis,mattis in est non, elementum facilisis ligula. Ut molestie et lacus egetelementum.",
    imageUrl: "./projects/doors/doors1/porte-F-B.jpeg",
  },
];

const updateHistory = (hash) => {
  console.log("updateHistory", hash);
  clearTimeout(updateHistory.timeout);
  updateHistory.timeout = setTimeout(function () {
    if (window.location.hash !== hash) {
      window.history.pushState({}, window.title, hash);
    }
  }, 1000);
};
