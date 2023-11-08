import React from "react";

import styled from "styled-components";

const LogoWrapper = styled.div`
  display: flex;
  margin: 1.5rem;
  margin-right: 1rem;
`;

export const Logo = () => (
  <LogoWrapper>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 30 30"
      fill="none"
    >
      <rect x="5.5" y="5.5" width="24" height="24" stroke="white" />
      <rect x="0.5" y="0.5" width="24" height="24" stroke="white" />
    </svg>
  </LogoWrapper>
);
