import React from "react";
import styled from "@emotion/styled";

const positionMap = {
  c: "#3867d6",
  lw: "#eb3b5a",
  rw: "#20bf6b",
  ld: "#8854d0",
  rd: "#8854d0",
};

export const StyledTable = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
`;

export const StyledHeader = styled.thead``;

export const StyledRow = styled.tr`
  background-color: #fff;
`;

export const StyledLayout = styled.main`
  background-color: #d1d8e0;
`;

export const StyledCell = styled.td`
  text-align: ${({ isNumber }) => (isNumber ? "right" : "left")};
  padding: 0.5rem;
`;

export const RankingAvatar = styled.div`
  background-color: ${({ position }) => positionMap[position.toLowerCase()]};
  color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
