import React from "react";
import "../App.css";
import { Table } from "semantic-ui-react";

const PlayerTable = props => {
  console.log("Props Passed: ", props);
  const playerData = props.players;
  console.log(playerData);
  return (
    <div className="table-container">
      <Table id="dataTable">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Country</Table.HeaderCell>
            <Table.HeaderCell>Searches</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {playerData.map(player => (
            <Table.Row>
              <Table.Cell>{player.name}</Table.Cell>
              <Table.Cell>{player.country}</Table.Cell>
              <Table.Cell>{player.searches}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default PlayerTable;
