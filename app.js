const express = require("express");
const path = require("path");

// initialise an instance of express
const app = express();

// set the port number for network traffic
const port = 3000;

// load the view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Home route
app.get("/", (req, res) => {
    res.render("index", {
        title: "Home Page",
    });
});

// About route
app.get("/about", (req, res) => {
    res.render("about", {
        title: "About Page",
    });
});

// Redirect example
app.get("/home", (req, res) => {
    res.redirect("/");
});

// No route, display 404 page
app.use((req, res) => {
    res.render("404");
});

// start the node server
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
