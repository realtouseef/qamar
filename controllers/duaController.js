const duas = require("../data/duas.json");

const getDuas = (req, res) => {
  res.send(duas);
};

const getDua = (req, res) => {
  const duaid = req.params.duaid;
  try {
    const dua = duas.find((dua) => dua.id === parseInt(duaid));
    if (!dua) {
      res.send(
        `There are only limited number of duas available, please check the <a href="https://github.com/realtouseef/qamar" target="_blank">github repo</a> to know more.`
      );
    }
    res.status(200).send(dua);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = { getDuas, getDua };
