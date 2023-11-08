import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05), 0 0px 10px rgba(0, 0, 0, 0.08);
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  min-width: 300px;
`;

export const CardHeader = styled.div``;

export const CardTitle = styled.h3`
  padding-bottom: 8px;
  border-bottom: 1px solid #e0e0e0;
  padding: 1.5rem 1.2rem 0.8rem;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  min-height: 3rem;
  padding: 1.5rem 1.2rem;
`;

export const CardFooter = styled.div`
  display: flex;
  align-self: flex-end;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0 1.2rem 1.2rem;
`;
