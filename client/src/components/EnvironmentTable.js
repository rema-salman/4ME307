import { Table } from "react-bootstrap";
import moment from "moment";

function EnvironmentTable({ environmentalReadings }) {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Air Humidity</th>
          <th>Air Temperature (C)</th>
          <th>Date/Time</th>
          <th>Rain Height</th>
          <th>Wind Direction</th>
          <th>Wind Intensity</th>
        </tr>
      </thead>
      <tbody>
        {environmentalReadings.map((item) => (
          <tr key={item.date}>
            {Object.values(item).map((val) => (
              <td>{isNaN(val) ? moment(val).format("lll") : val}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default EnvironmentTable;
