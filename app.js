const express = require("express");
const cors = require("cors");
const versesRoute = require("./routes/verseRoutes");
const duasRoute = require("./routes/duasRoutes");

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) =>
  res.send(
    `<h1>‘Qamar’ (qa-mar) / moon</h1> <p>An API that shows verses from the Qur'an based on emotions.</p>`
  )
);

// verses routes
app.use("/verses", versesRoute);

// duas routes
app.use("/duas", duasRoute);

// 404 routes
app.use((req, res) => {
  res
    .status(404)
    .send(
      "Either this page doesn't exist or you might have entered a incorrect url"
    );
});

app.listen(PORT, (req, res) =>
  console.log(`Port running at http://localhost:${PORT}`)
);
