const mongoose = require('mongoose');


//Schema represent the database's structure and it's contents.
const Schema = mongoose.Schema;


const vaccinationDone = new Schema(
    {
       'vaccination-id': {
            type:String,
            required: true
        },
        sourceBottle: {
                type:String,
                required: true
        },
        gender: {
            type: String,
            required: true
        },
        vaccinationDate: {
            type: String,
            required: true
        }
},
{ collection: 'vaccination-data'}     // collection name present in mongodatabase.
);

const AllVaccinationData = mongoose.model("vaccination-data", vaccinationDone);

module.exports = AllVaccinationData;