const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
})

app.get("/camps", function(req, res){
    let camps = [
        { name: "Manali", image: "https://images.unsplash.com/photo-1503265192943-9d7eea6fc77a?auto=format&fit=crop&w=400&q=80" },
        { name: "Shimla", image: "https://images.unsplash.com/photo-1437382944886-45a9f73d4158?auto=format&fit=crop&w=400&q=80" },
        { name: "Kasol", image: "https://images.unsplash.com/photo-1496080174650-637e3f22fa03?auto=format&fit=crop&w=400&q=80" }
    ];
    res.render("camps", {camps});
})

app.listen(3000, function(){
    console.log("Server started at port 3000");
})