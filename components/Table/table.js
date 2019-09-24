import React from "react";
import Checkbox from "../checkbox";
import * as tableStyles from "./table.styles";

/*

  data structure: 
  
  {Columns} : [{label: "Corsica rank", key: "corsica-rank", cellChildren: (<tableStyles.RankingAvatar>
      <span>
        {player.position}
        {player.rank}
      </span>
    </RankingAvatar>}), {
      header: "Player name"
    }]

  {Column.header: "Corsica rank"}
  {Column.key="corsica-rank"}
  {Column.cellChildren=(
    <tableStyles.RankingAvatar>
      <span>
        {player.position}
        {player.rank}
      </span>
    </RankingAvatar>
    )
  }
//  <tableStyles.StyledCell as="th" textAlign="center">
*/

const table = props => (
  <tableStyles.StyledTable>
    <tableStyles.StyledTableHeader>
      <tr>
        {props.columns.map(tableColumn => {
          return (
            <tableStyles.StyledCell
              key={`table-header--row--${tableColumn.componentKey}`}
              as="th"
              textAlign="center">
              {tableColumn.label}
            </tableStyles.StyledCell>
          );
        })}
      </tr>
    </tableStyles.StyledTableHeader>
    <tbody>
      {props.players.map(player => {
        const onPlayerSelect = playerId => value => {
          props.selectPlayer({ value, playerId });
        };
        return (
          <tableStyles.StyledRow
            key={player.id}
            onClick={() => {
              props.handlePlayerDrilldown(player.id);
            }}
            isDrafted={player.selected}>
            <tableStyles.StyledCell>
              <tableStyles.RankingAvatar position={player.position}>
                <span>
                  {player.position}
                  {player.rank}
                </span>
              </tableStyles.RankingAvatar>
            </tableStyles.StyledCell>
            <tableStyles.StyledCell textTransform={"capitalize"}>
              {player.name}
            </tableStyles.StyledCell>
            <tableStyles.StyledCell>{player.team}</tableStyles.StyledCell>
            <tableStyles.StyledCell textAlign="right">
              {player.rating}
            </tableStyles.StyledCell>
            <tableStyles.StyledCell>
              <Checkbox
                isSelected={player.selected}
                onChange={onPlayerSelect(player.id)}
              />
            </tableStyles.StyledCell>
          </tableStyles.StyledRow>
        );
      })}
    </tbody>
  </tableStyles.StyledTable>
);

export default table;
