const weather_station = require("./node_devices/weather_station");
const fields_station = require("./node_devices/fields_station");
const rule_engine = require("./intelligence_server/rule_engine");

weather_station.fetchWeatherData();
fields_station.fetchfieldsData();

// sets inital interval every 60 minutes
setInterval(rule_engine.checkMoistureAndWater, 360000);
