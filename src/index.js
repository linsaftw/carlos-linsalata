let express = require("express");
let path = require("path");

let app = express();

app.set("view engine", "ejs");

// Public
app.use(express.static(path.join(__dirname, 'public')));

// Index page
app.get("", (req, res) => {
    res.render(__dirname + "/views/index", { pageName: "Index" });
});

app.listen(80, () => {
    console.log("Listening on port 80");
});