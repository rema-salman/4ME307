const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

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

app.listen(port, () => {
  console.log(`Example app listening at http://0.0.0.0:${port}`);
});
