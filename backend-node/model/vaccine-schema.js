const mongoose = require("mongoose");
 

//Schema represent the database's structure and it's contents.
const Schema = mongoose.Schema;

const VaccineSchema = new Schema(
 
  {
  id: {
    type: String,
    required: true,
  },
  orderNumber: {
    type:String,
    required:true,
  },
  responsiblePerson:{
    type:String,
    required:true,
  },
  healthCareDistrict: {
    type: String,
    required: true,
  },
  vaccine: {
    type: String,
    required: true,
  },
  injections: {
    type: Number,
    required: true,
  },
  arrived: {
      type:String,
    required: true,
  },
},
{collection:'allvaccinedata'},

);

//if you want to get existed data from mongodb, 
// use collection name inside model as written here.

const AllVaccineData = mongoose.model("allvaccinedata", VaccineSchema);   



module.exports = AllVaccineData;

