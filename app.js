const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

let camps = [
    { name: "Manali", image: "https://images.unsplash.com/photo-1503265192943-9d7eea6fc77a?auto=format&fit=crop&w=400&q=80" },
    { name: "Shimla", image: "https://images.unsplash.com/photo-1437382944886-45a9f73d4158?auto=format&fit=crop&w=400&q=80" },
    { name: "Kasol", image: "https://images.unsplash.com/photo-1496080174650-637e3f22fa03?auto=format&fit=crop&w=400&q=80" },
    { name: "Manali", image: "https://images.unsplash.com/photo-1503265192943-9d7eea6fc77a?auto=format&fit=crop&w=400&q=80" },
    { name: "Shimla", image: "https://images.unsplash.com/photo-1437382944886-45a9f73d4158?auto=format&fit=crop&w=400&q=80" },
    { name: "Kasol", image: "https://images.unsplash.com/photo-1496080174650-637e3f22fa03?auto=format&fit=crop&w=400&q=80" },
    { name: "Manali", image: "https://images.unsplash.com/photo-1503265192943-9d7eea6fc77a?auto=format&fit=crop&w=400&q=80" },
    { name: "Shimla", image: "https://images.unsplash.com/photo-1437382944886-45a9f73d4158?auto=format&fit=crop&w=400&q=80" },
    { name: "Kasol", image: "https://images.unsplash.com/photo-1496080174650-637e3f22fa03?auto=format&fit=crop&w=400&q=80" }
];

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/camps", (req, res) => {
    res.render("camps", {camps});
});

app.get("/camps/new", (req, res) => {
    res.render("newCamp");
});

app.post("/camps", (req, res) => {
   const name = req.body.name;
   const image = req.body.image;
   const newCamp = { name, image};
   camps.push(newCamp);
   res.redirect("/camps"); 
});

app.listen(3000, () => {
    console.log("Server started at port 3000");
})
