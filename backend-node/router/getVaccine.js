const express = require("express");
const router = express.Router();
const AllVaccineCompanyData = require("../model/vaccineCompany-schema");
const AllVaccinationData = require("../model/vaccinationDone-schema");

router.get("/", async (req, res) => {
  try {
    const receivedalldata = await AllVaccineCompanyData.find({});
    const receivedallVaccinationdata = await AllVaccinationData.find({});

    // console.log('the data are', res.json(antqueData))
    res.status(200).json({
      allCompanyVaccineData: receivedalldata,
      allVaccinationDoneData: receivedallVaccinationdata,
    });
  } catch (error) {
    console.log("there is an error getting data", error);
    res.status(400).json({ message: "unable to get data" });
  }
});

module.exports = router;
