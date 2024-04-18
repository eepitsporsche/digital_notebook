//Required Node Modules
const express = require("express");
const html_routes = require("./routes/html_routes");
const api_routes = require("./routes/api_routes");
const PORT = process.env.PORT || 3001;

//Create Express App
const app = express();


//Listen method for incoming connections on specified PORT
app.listen(PORT, () =>
    console.log(`Express server listening on port ${PORT}!`)
);