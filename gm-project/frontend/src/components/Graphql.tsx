import { useQuery, gql } from "@apollo/client";
import { Result } from "../types/Result";
import { Key } from "react";

const GET_RESULT = gql`
  query GetResult {
    getResult {
      fieldName
      fieldNo
      raceGrade
    }
  }
`;

const Graphql = () => {
  const { data } = useQuery(GET_RESULT);

  return (
    <table>
      <thead>
        <tr>
          <th>fieldName</th>
          <th>fieldNo</th>
          <th>raceGrade</th>
        </tr>
      </thead>
      <tbody>
        {data?.getResult.map((row: Result, index: Key) => {
          return (
            <tr key={index}>
              <td>{row.fieldName}</td>
              <td>{row.fieldNo}</td>
              <td>{row.raceGrade}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Graphql;
