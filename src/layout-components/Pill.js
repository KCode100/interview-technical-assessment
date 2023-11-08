import styled from "styled-components";

export const Pill = styled.div`
  display: flex;
  background: ${(props) =>
    props.color === "red"
      ? "red"
      : props.color === "orange"
      ? "orange"
      : props.color === "green"
      ? "green"
      : "linear-gradient(to right, #56ccf2 0%, #2f80ed 51%, #56ccf2 100%)"};
  background-size: 200% auto;
  padding: 0.4rem 1rem;
  border-radius: 1rem;
  color: #fff;
  text-transform: capitalize;
`;
