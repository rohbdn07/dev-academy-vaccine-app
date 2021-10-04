const AllVaccineCompanyData = require("../db/model/vaccineCompany-schema");
const AllVaccinationData = require("../db/model/vaccinationDone-schema");

const vaccine_index_get = async (req, res) => {
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
};

module.exports = { vaccine_index_get };
