let express = require("express");
let path = require("path");

let app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views")

// Public
app.use(express.static(path.join(__dirname, 'public')));

// Routes start
// Index
app.get("/", (req, res) => {
    res.render(__dirname + "/views/index", { pageName: "Index" });
});

// Articles
app.use('/articles', require(__dirname + '/routes/articles.routes.js'));

// Contact
app.get("/contact", (req, res) => {
    res.render(__dirname + "/views/contact", { pageName: "Contact" });
});

// Contact
app.get("/about", (req, res) => {
    res.render(__dirname + "/views/about", { pageName: "About" });
});

// 404 Not Found
app.get('*', function(req, res){
    res.render(__dirname + "/views/404", { pageName: "404" });
  });
// Routes end

app.listen(80, () => {
    console.log("Listening on port 80");
});