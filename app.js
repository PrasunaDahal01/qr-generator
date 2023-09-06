const express = require("express");
const app = express();
const port = 3000;
const bp = require("body-parser");

var routeManager = require("./routes");

app.set("views", `${__dirname}/views`);
app.set("view engine", "ejs");
app.use(bp.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //it allows us to access information coming from form.
app.use("/public", express.static(__dirname + "/public"));

app.use("/", routeManager);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
