const duas = require("../data/duas.json");

const getDuas = (req, res) => {
  res.send(duas);
};

const getDua = (req, res) => {
  const duaid = req.params.duaid;
  try {
    const dua = duas.find((dua) => dua.id === parseInt(duaid));
    res.status(200).send(dua);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = { getDuas, getDua };
