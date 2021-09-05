import styled from "styled-components";
import { recommendations } from "../../mocks/recommendations-michael";
import { compare } from "../../helpers/compare";

const Heading = styled.h1`
  color: #55585a;
  font-family: sans-serif;
  font-size: 36px;
  font-weight: 400;
  margin: 0;
  padding: 38px 0;
  text-align: center;
`;

const TableContainer = styled.table`
  margin: 0 auto;
  padding-bottom: 42px;
  text-align: center;
  width: 90%;
`;

const TableData = styled.td`
  font-size: 17px;
  font-weight: 500;
  padding: 6px 0;
`;

const TableHead = styled.thead`
  color: #98c210;
  font-family: sans-serif;
  font-size: 20px;
  font-weight: 400;
`;

function Recommendations() {
  return (
    <div>
      <Heading>Your Recommendations</Heading>
      <TableContainer>
        <TableHead>
          <tr>
            <td>Priority</td>
            <td>Contact</td>
            {/* <TableData>Postcode</TableData> */}
            <td>Messaging</td>
            <td>Suggestion</td>
            <td>Reason</td>
            {/* <TableData>Target</TableData> */}
            <td>Access</td>
            <td>Potential Revenue</td>
          </tr>
        </TableHead>
        <tbody>
          {recommendations.sort(compare("Priority")).map((record) => {
            return (
              <tr>
                <TableData>{record.Priority}</TableData>
                <TableData>{record.Contact}</TableData>
                {/* <TableData>{record.Postcode}</TableData> */}
                <TableData>{record.Messaging}</TableData>
                <TableData>{record.Suggestion}</TableData>
                <TableData>{record.Reason}</TableData>
                {/* <TableData>{record["Target?"]}</TableData> */}
                <TableData>{record.Access}</TableData>
                <TableData>{record["Potential revenue"]}</TableData>
              </tr>
            );
          })}
        </tbody>
      </TableContainer>
    </div>
  );
}

export default Recommendations;
