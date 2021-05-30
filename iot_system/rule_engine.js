const FirebaseDB = require("./firebase");

function setIrrigationStatus() {
  //  Publish data to cloud
  FirebaseDB.ref("irrigation_status/motor_one").set({ MOTOR_STATUS: "OFF" });
  FirebaseDB.ref("irrigation_status/motor_two").set({ MOTOR_STATUS: "OFF" });
  console.log("both motor_status: has been set to OFF");
}

// Motor instance is motor_one or motor_two
function changeIrrigationStatus(motor_instance) {
  motor_instance.once("value", function (snapshot) {
    console.log("status befor change" + snapshot.val().MOTOR_STATUS);
    if (snapshot.val().MOTOR_STATUS == "OFF") {
      motor_instance.update({ MOTOR_STATUS: "ON" });
      console.log("status after change" + snapshot.val().MOTOR_STATUS);
    }
  });
}

// access the latesed retrieved data from fields_station
// turn motors off, then check if moisture is low and trigger field motor
function checkMoistureAndWater() {
  FirebaseDB.ref("fields_station").on("value", function (snapshot) {
    const soil_moisture_list = [];
    const levels = snapshot.val();
    for (i in snapshot.val()) {
      soil_moisture_list.push(levels[i]);
      console.log(soil_moisture_list);
    }
    // set both motors to off before the check
    setIrrigationStatus();
    //--------------- Low moisture of field One ---------------
    if (
      soil_moisture_list[soil_moisture_list.length - 1].field_1.soil_moisture <=
      30
    ) {
      changeIrrigationStatus(FirebaseDB.ref("irrigation_status/motor_one"));

      // pushes a new date whenever irrigation is on
      FirebaseDB.ref("irrigation_status_track/motor_one")
        .push()
        .set(new Date().toISOString())
        .catch((error) => {
          console.log("caught", error.message);
        });
    }

    //--------------- Low moisture of field two ---------------
    if (
      soil_moisture_list[soil_moisture_list.length - 1].field_2.soil_moisture <=
      50
    ) {
      changeIrrigationStatus(FirebaseDB.ref("irrigation_status/motor_two"));
      // pushes a new date whenever irrigation is on
      FirebaseDB.ref("irrigation_status_track/motor_two")
        .push()
        .set(new Date().toISOString())
        .catch((error) => {
          console.log("caught", error.message);
        });
    }
  });
}

module.exports = { checkMoistureAndWater };
