let express = require("express");
let router = express.Router();

router.get("/", (req, res) =>{
    res.render("articles/articles.ejs", { pageName: "Articles" });
});

router.get("/infortunio-laboral", (req, res) => {
    res.render("articles/infortunioLaboral.ejs", { pageName: "Articles" });
});

router.get("/asistencia-letrada", (req, res) => {
    res.render("articles/asistenciaLetrada.ejs", { pageName: "Articles" });
});

router.get("/bonificacion-fuerzas", (req, res) => {
    res.render("articles/bonificacionFuerzas.ejs", { pageName: "Articles" });
});

module.exports = router