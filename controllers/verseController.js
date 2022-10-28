const verses = require("../data/emotionBasedVerses.json");

const getVerses = (req, res) => {
  res.send(verses);
};

const getVerse = (req, res) => {
  const { verseid } = req.params;
  try {
    const foundVerse = verses.find((v) => v.id === parseInt(verseid));
    if (!foundVerse) {
      res.send(
        `There are only limited number of verses available, please check the <a href="https://github.com/realtouseef/qamar" target="_blank">github repo</a> to know more.`
      );
    }
    res.status(200).send(foundVerse);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = { getVerses, getVerse };
