import { useEffect, useState } from "react";
import { firebasedDB } from "../util/firebase";

import EnvironmentTable from "../components/EnvironmentTable";
import MoistureCard from "../components/MoistureCard";
import IrrigationCard from "../components/IrrigationCard";

import { Row, Col } from "react-bootstrap";

function FieldOne() {
  const [environmentalReadings, setEnvironmentReadings] = useState([]);
  const [fieldReadingDate, setFieldReadingDate] = useState([]);
  const [soilMoisture, setSoilMoisture] = useState([]);
  const [irrigationStatus, setIrrigationStatus] = useState("");

  useEffect(() => {
    // Getting the filds readings (moistore and date)
    const fields_stationRef = firebasedDB.ref("fields_station");
    fields_stationRef.on("value", (snapshot) => {
      const soil_moisture_list = [];
      const field_reading_list = [];
      const fields_station_info = snapshot.val();
      for (let id in fields_station_info) {
        field_reading_list.push(fields_station_info[id].date);
        soil_moisture_list.push(fields_station_info[id].field_1.soil_moisture);
      }
      setFieldReadingDate(field_reading_list);
      setSoilMoisture(soil_moisture_list);
      console.log(fieldReadingDate);
      console.log(soilMoisture);
    });

    // Getting the irrigationStatus (motor two)
    const motorTwoRef = firebasedDB.ref("irrigation_status/motor_one");
    motorTwoRef.on("value", (snapshot) => {
      setIrrigationStatus(snapshot.val().MOTOR_STATUS);
      console.log(irrigationStatus);
    });

    // Getting environmental readings
    const weatherStationRef = firebasedDB.ref("weather_station");
    weatherStationRef.on("value", (snapshot) => {
      const weather_readings_list = [];
      const weather_station_info = snapshot.val();
      for (let id in weather_station_info) {
        weather_readings_list.push(weather_station_info[id]);
      }
      setEnvironmentReadings(weather_readings_list.reverse());
      console.log(environmentalReadings);
    });
  }, []);

  return (
    <div>
      <h3 className="text-center">Field One</h3>
      <Row className="my-5 align-items-center">
        <Col>
          {soilMoisture && fieldReadingDate ? (
            <MoistureCard
              moistureLevels={soilMoisture}
              fieldReadingDate={fieldReadingDate}
            />
          ) : (
            ""
          )}
        </Col>
        <Col>
          {irrigationStatus ? (
            <IrrigationCard irrigationStatus={irrigationStatus} />
          ) : (
            ""
          )}
        </Col>
      </Row>
      <EnvironmentTable environmentalReadings={environmentalReadings} />
    </div>
  );
}

export default FieldOne;
