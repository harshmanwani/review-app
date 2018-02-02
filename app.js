const   express     = require("express"),
        app         = express(),
        bodyParser  = require("body-parser"),
        mongoose    = require("mongoose");
        
// const random = require("random-world")

mongoose.connect("mongodb://localhost/review");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

const CampSchema = new mongoose.Schema({
    name: String,
    image: String
});

const Camp = mongoose.model("Camp", CampSchema);

// Camp.create(
//     {
//         name: "Manali",
//         image: "https://images.unsplash.com/photo-1437382944886-45a9f73d4158?auto=format&fit=crop&w=400&q=80"
//     }, 
//     function(err, camp){
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("New Camp Created");
//             console.log(camp);
//         }
//     }
// );

// let camps = [
//     { name: "Manali", image: "https://images.unsplash.com/photo-1503265192943-9d7eea6fc77a?auto=format&fit=crop&w=400&q=80" },
//     { name: "Shimla", image: "https://images.unsplash.com/photo-1437382944886-45a9f73d4158?auto=format&fit=crop&w=400&q=80" },
//     { name: "Kasol", image: "https://images.unsplash.com/photo-1496080174650-637e3f22fa03?auto=format&fit=crop&w=400&q=80" },
//     { name: "Manali", image: "https://images.unsplash.com/photo-1503265192943-9d7eea6fc77a?auto=format&fit=crop&w=400&q=80" },
//     { name: "Shimla", image: "https://images.unsplash.com/photo-1437382944886-45a9f73d4158?auto=format&fit=crop&w=400&q=80" },
//     { name: "Kasol", image: "https://images.unsplash.com/photo-1496080174650-637e3f22fa03?auto=format&fit=crop&w=400&q=80" },
//     { name: "Manali", image: "https://images.unsplash.com/photo-1503265192943-9d7eea6fc77a?auto=format&fit=crop&w=400&q=80" },
//     { name: "Shimla", image: "https://images.unsplash.com/photo-1437382944886-45a9f73d4158?auto=format&fit=crop&w=400&q=80" },
//     { name: "Kasol", image: "https://images.unsplash.com/photo-1496080174650-637e3f22fa03?auto=format&fit=crop&w=400&q=80" }
// ];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/camps", function(req, res){
    Camp.find({}, function(err, allCampgrounds) {
        if(err){
            console.log(err);
        } else {
            res.render("camps", {camps : allCampgrounds});
        }
    })
});

app.get("/camps/new", function(req, res){
    res.render("newCamp");
});

app.post("/camps", function(req, res){
    const name = req.body.name;
    const image = req.body.image;
    const newCamp = { name, image};
    //    camps.push(newCamp);
    Camp.create(newCamp, function(err, newCamps) {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/camps"); 
        }
    })
});

app.listen(3000, function(){
    console.log("Server started at port 3000");
})