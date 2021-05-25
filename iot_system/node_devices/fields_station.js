const FirebaseDB = require("../intelligence_server/firebase");

/**
 * Illustrates virtual soil moisture sensors.
 * The generated data is in percentage(%) for each field,
 * pushed to firebase at directry "fields_station"
 * in five-minute intervals.
 */
function fetchfieldsData() {
  setInterval(function () {
    // Function to generate random values to send to the cloud platform
    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    const fieldsData = {
      field_1: {
        soil_moisture: getRndInteger(0, 100),
      },
      field_2: {
        soil_moisture: getRndInteger(0, 100),
      },
      date: new Date().toISOString(),
    };
    console.log("Publishing fieldsData message:", JSON.stringify(fieldsData));
    //  Publish data to cloud the weather_station
    FirebaseDB.ref("fields_station")
      .push()
      .set(fieldsData)
      .catch(function (error) {
        console.log("caught", error.message);
      });
  }, 300000);
}

module.exports = {
  fetchfieldsData,
};
