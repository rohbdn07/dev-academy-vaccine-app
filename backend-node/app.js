require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mangoose= require('mongoose');


const app = express();


//connection to Mangodb...
const dbURI = process.env.MONGODB_URI;
mangoose.connect( dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("connected to db"))
  .catch((err) => console.log("there is an error", err));


//listing to LocalHost
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`listening on ${PORT}`));
  console.log('  Press CTRL-C to stop\n');


  // parse json request body
app.use(express.json());
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));
// enable cors
app.use(cors());

app.get('/', (req,res) => {
    res.send('I am coding late night, feeling sleepy')
})


module.exports = app;