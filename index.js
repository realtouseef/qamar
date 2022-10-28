const express = require("express");
const cors = require("cors");
const { getVerses, getVerse } = require("./controllers/verseController");
const { getDuas, getDua } = require("./controllers/duaController");

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) =>
  res.send(
    `<h1>‘Qamar’ (qa-mar) / moon</h1> <p>An API that shows verses from the Qur'an based on emotions.</p>`
  )
);

app.get("/verses", getVerses);

app.get("/verses/:verseid", getVerse);

app.get("/duas", getDuas);

app.get("/duas/:duaid", getDua);

app.listen(PORT, (req, res) =>
  console.log(`Port running at http://localhost:${PORT}`)
);
