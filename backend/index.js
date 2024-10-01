const express = require("express");
const cors = require("cors");
const app = express();

const PORT = 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "GET", "PUT", "DELETE"],
  })
);

app.get("/", (_, res) => {
  res.json({
    msg: "Hello World",
  });
});

app.get("/api/users", (_, res) => {
  res.json({
    msg: "Get Data Successfully!!",
    data: [
      { id: 0, name: "Son Dang" },
      { id: 1, name: "Vu Ga" },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
