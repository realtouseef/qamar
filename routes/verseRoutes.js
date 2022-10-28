const express = require("express");
const { getVerses, getVerse } = require("../controllers/verseController");

const router = express.Router();

router.get("/", getVerses);

router.get("/:verseid", getVerse);

module.exports = router;
