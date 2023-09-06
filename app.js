const express = require("express");
const app = express();
const port = 3000;
const ejs = require("ejs");
const path = require("path");
const bp = require("body-parser"); //Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

var routeManager = require("./routes");

app.set("views", `${__dirname}/views`);
app.set("view engine", "ejs");
app.use(bp.json()); //for json data
app.use(bp.urlencoded()); // for form data
app.use(express.json()); //this is to accept data in json format
app.use(express.urlencoded({ extended: false })); //it allows us to access and decode information coming from form.
app.use("/public", express.static(__dirname + "/public"));

app.use("/", routeManager);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
