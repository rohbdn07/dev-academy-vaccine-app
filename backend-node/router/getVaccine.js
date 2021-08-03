const express = require('express')
const router = express.Router()
const AllVaccineCompanyData = require('../model/vaccine-schema')


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

module.exports = router;