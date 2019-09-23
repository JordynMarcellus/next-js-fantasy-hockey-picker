import React from "react";
import Checkbox from "./checkbox";
import * as tableStyles from "./table.styles";

const table = props => (
  <tableStyles.StyledTable>
    <tableStyles.StyledTableHeader>
      <tr>
        <tableStyles.StyledCell as="th" textAlign="center">
          Corsica rank
        </tableStyles.StyledCell>
        <tableStyles.StyledCell as="th" textAlign="center">
          Player name/position
        </tableStyles.StyledCell>
        <tableStyles.StyledCell as="th" textAlign="center">
          Current team
        </tableStyles.StyledCell>
        <tableStyles.StyledCell as="th" textAlign="center">
          Corsica rating
        </tableStyles.StyledCell>
        <tableStyles.StyledCell as="th" textAlign="center">
          Drafted?
        </tableStyles.StyledCell>
      </tr>
    </tableStyles.StyledTableHeader>
    <tbody>
      {props.players.map(player => {
        const onPlayerSelect = playerId => value => {
          // run update
          props.selectPlayer({ value: !value, playerId });
        };
        return (
          <tableStyles.StyledRow key={player.id} isDrafted={player.selected}>
            <tableStyles.StyledCell>
              <tableStyles.RankingAvatar position={player.position}>
                <span>
                  {player.position}
                  {player.rank}
                </span>
              </tableStyles.RankingAvatar>
            </tableStyles.StyledCell>
            <tableStyles.StyledCell>{player.name}</tableStyles.StyledCell>
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
