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
  background-color: #fff;
`;

export const StyledTableHeader = styled.thead`
  border-bottom: 2px solid #333;
`;

export const StyledRow = styled.tr`
  background-color: ${({ isDrafted }) => (isDrafted ? "red" : "#fff")};
  &:nth-of-type(even) {
    background-color: #d9d9d9;
  }
`;

export const StyledLayout = styled.main`
  background-color: #4b4b4b;
`;

export const StyledCell = styled.td(
  props => `
  text-align: ${props.textAlign}};
  padding: 0.5rem;
`
);

StyledCell.defaultProps = {
  textAlign: "left",
};

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
