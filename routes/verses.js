const express = require("express");
const { getVerses, getVerse } = require("../controllers/verseController");

const router = express.Router();

// all routes in here are starting with /verses
router.get("/", getVerses);

router.get("/:id", getVerse);

module.exports = router;
