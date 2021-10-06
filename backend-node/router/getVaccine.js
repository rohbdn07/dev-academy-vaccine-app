const express = require("express");
const router = express.Router();
const getVaccineController = require("../controllers/getvaccineController");

//GET: route(/api/vaccines) to get all the data from db.
router.get("/vaccines", getVaccineController.vaccine_index_get);

module.exports = router;
