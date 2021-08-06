const express = require("express");
const router = express.Router();
const getVaccineController = require("../controllers/getvaccineController");


//GET: route(/) to get all the data from db.
router.get("/", getVaccineController.vaccine_index_get);

module.exports = router;
