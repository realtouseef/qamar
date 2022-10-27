const verses = require("../verses.json");

const getVerses = (req, res) => {
  res.send(verses);
};

const getVerse = (req, res) => {
  const { id } = req.params;

  const singleVerse = verses.find((verse) => verse.id === id);

  res.send(singleVerse);
};

module.exports = { getVerse, getVerses };
