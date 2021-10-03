require("dotenv").config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const mangoose = require("mongoose");
const path = require("path");
const getvaccineRouter = require("./router/getVaccine");

const app = express();

//connection to Mangodb...
// const dbURI = process.env.MONGODB_URI;
mangoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qvvz3.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        }
    )
    .then(() => console.log("connected to mongo-db"))
    .catch((err) => console.log("there is an error", err));

//listing to LocalHost
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
console.log("  Press CTRL-C to stop\n");

// parse json request body
app.use(express.json());
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));
// enable cors
app.use(cors());

//Serve static assists if in PRODUCTION
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client-react", "build")));
    app.get("*", (req, res) => {
        res.sendFile(
            path.join(__dirname, "../client-react", "build", "index.html")
        );
    });
}

//get data from db
app.use(getvaccineRouter);

// The `res.redirect()` function sends back an HTTP 302 by default.
// When an HTTP client receives a response with status 302, it will send
// an HTTP request to the URL in the response, in this case `/`
router.get("*", (req, res) => {
    res.redirect("/");
});

module.exports = app;
