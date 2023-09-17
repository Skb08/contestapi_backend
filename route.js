const { Router } = require("express");

const {
  getSites,
  saveSite,
} = require("./controller");

const router = Router();

router.get("/get", getSites);
router.post("/save", saveSite);

module.exports = router;