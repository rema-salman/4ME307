const express = require("express");
const path = require("path");
const app = express();
const server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
const server_ip_address = process.env.OPENSHIFT_NODEJS_IP || "0.0.0.0";

// app.get('/', (req, res) => {
//   res.send(JSON.stringify({
// 	"result":"Hello World!!",
// 	"status":200
// 	}))
// })

// Deliver HTML Files with Express via sendFile
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(server_port, server_ip_address, () => {
  console.log(
    `Example app listening at http://${server_ip_address}:${server_port}`
  );
});
