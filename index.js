const express = require("express");
const bodyParser = require("body-parser");
const versesRoutes = require("./routes/verses");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use("/verses", versesRoutes);

app.get("/", (req, res) => res.send(`‘Qamar’ (qa-mar) / moon`));

app.listen(PORT, (req, res) =>
  console.log(`Port running at http://localhost:${PORT}`)
);
