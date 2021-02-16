//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');   //Lodash use karne ka tarika ..company standard ..though not necessary to use this underscore

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));







app.get("/",function(req,res){
  
    res.sendFile(__dirname+"/index.html");
});

app.get("/crew",function(req,res){

    res.render("crew");

    
});

app.get("/achievements",function(req,res){
    res.render("achievements");
});



// app.get("/about",function(req,res){
//   res.render("about",{aboutPageContent:aboutContent});
// });

// app.get("/contact",function(req,res){
//   res.render("contact",{contactPageContent:contactContent});
// });


// // Compose Route

// app.get("/compose",function(req,res){
//   res.render("compose");
// });

// app.post("/compose",function(req,res){
//   const post=new Post({

//      title:req.body.postTitle,
//      content:req.body.postBody

//   });
//   post.save(function(err){

//     if (!err){
 
//       res.redirect("/");
 
//     }
 
//   });

// });


// //Full Blog Post
// app.get("/posts/:postId", function(req, res){

//   const requestedPostId = req.params.postId;
//   Post.findOne({_id: requestedPostId}, function(err, post){

//     res.render("post", {
 
//       title: post.title,
 
//       content: post.content
 
//     });
 
//   });


// });











app.listen(3000, function() {
  console.log("Server started on port 3000");
});
