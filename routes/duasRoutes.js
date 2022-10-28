const express = require("express");
const { getDuas, getDua } = require("../controllers/duaController");

const router = express.Router();

router.get("/", getDuas);

router.get("/:duaid", getDua);

module.exports = router;
