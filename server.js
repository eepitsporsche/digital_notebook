//Required Node Modules
const express = require("express");
const html_routes = require("./routes/html_routes");
const api_routes = require("./routes/api_routes");
const PORT = process.env.PORT || 3001;

//Create Express App
const app = express();

//Middleware//
//Parse Incoming URL-Encoded Request Data to Allow Form Data Handling
app.use(express.urlencoded({ extended: false}));

//Parse Incoming JSON Request Data to Allow JSON Payloads Handling in the Request Body
app.use(expresss.json());

//Use 'public' Directory to Serve Static Assets
app.use(express.static("public"));

//Route Handlers for Requests to Respective Routes
app.use(html_routes);
app.use(api_routes);

//Listen method for incoming connections on specified PORT
app.listen(PORT, () =>
    console.log(`Express server listening on port ${PORT}!`)
);