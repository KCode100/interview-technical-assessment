import styled from "styled-components";

import { Logo } from "./Logo";
import { Container } from "./Container";

const StyledPageHeader = styled.div`
  background: #0f0d08;
  height: 5.5rem;
`;

const StyledContainer = styled(Container)`
  display: flex;
  max-width: 1200px;
`;

const PageTitle = styled.h2`
  display: flex;
  align-self: center;
  color: #fff;
  margin-top: 0.25rem;
`;

export const PageHeader = () => (
  <StyledPageHeader>
    <StyledContainer>
      <Logo />
      <PageTitle>Question Builder</PageTitle>
    </StyledContainer>
  </StyledPageHeader>
);
