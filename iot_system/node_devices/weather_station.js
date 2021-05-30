const FirebaseDB = require("../firebase");
/**
 * Illustrates virtual environmental sensors.
 * The generated data is in percentage(%) for each field,
 * pushed to the real-time database at directry "fields_station"
 * in five-minute intervals.
 */
function fetchWeatherData() {
  setInterval(function () {
    // Function to generate random values to send to the cloud platform
    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    const weatherStationData = {
      air_temperature: getRndInteger(-50, 50), //(C)
      air_humidity: getRndInteger(0, 100), //(%)
      wind_direction: getRndInteger(0, 360), //(Deg)
      wind_intensity: getRndInteger(0, 100), //(%)
      rain_height: getRndInteger(0, 50), //(mm / h)
      date: new Date().toISOString(),
    };
    console.log(
      "Publishing weatherStationData message:",
      JSON.stringify(weatherStationData)
    );
    //  Publish data to the weather_station
    FirebaseDB.ref("weather_station")
      .push()
      .set(weatherStationData)
      .catch((error) => {
        console.log("caught", error.message);
      });
  }, 300000);
}
module.exports = { fetchWeatherData };
