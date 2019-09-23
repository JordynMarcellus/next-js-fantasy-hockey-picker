import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import Table from "./table";
const testData = [
  {
    id: "d23e3f7a-7cd7-4496-8af4-6551cef3b94f",
    name: "nikita kucherov",
    selected: false,
    position: "RW",
    team: "TB",
    rank: 1,
    rating: "88.63",
  },
  {
    id: "6073ce66-15f0-430c-a665-caac2f3f715f",
    name: "brad marchand",
    selected: false,
    position: "LW",
    team: "BOS",
    rank: 1,
    rating: "86.16",
  },
  {
    id: "6af98394-5469-413c-b0f4-b1edf1710697",
    name: "nathan mackinnon",
    selected: false,
    position: "C",
    team: "COL",
    rank: 2,
    rating: "86.10",
  },
];

describe("Table component", () => {
  it("renders a table with playerData", () => {
    const columns = [
      {
        header: "Corsica rank",
        key: "corsica-rank",
      },
      {
        header: "Player name",
        key: "player-name",
      },
      {
        header: "Current team",
        key: "current-team",
      },
      {
        header: "Corsica rating",
        key: "corsica-rating",
      },
      {
        header: "Drafted?",
        key: "drafted",
      },
    ];
    const { container, debug } = render(
      <Table columns={columns} players={testData} selectPlayer={jest.fn()} />
    );
    expect(container).toMatchSnapshot();
  });
});
