const express = require('express')
const router = express.Router()
const AllVaccineCompanyData = require('../model/vaccineCompany-schema')
const AllVaccinationData = require('../model/vaccinationDone-schema')


router.get('/', async(req,res) => {
    try {
        const receivedalldata = await AllVaccineCompanyData.find({});

        // console.log('the data are', res.json(antqueData))
        res.status(200).send(receivedalldata);
    } catch (error) {
        console.log('there is an error getting data', error);
        res.status(400).send({message:'unable to get data'})
    }
})

router.get('/vaccination-done', async(req,res) => {
    try {
        const receivedalldata = await AllVaccinationData.find({});

        // console.log('the data are', res.json(antqueData))
        res.status(200).send(receivedalldata);
    } catch (error) {
        console.log('there is an error getting data', error);
        res.status(400).send({message:'unable to get vaccination done data'})
    }
})


module.exports = router;