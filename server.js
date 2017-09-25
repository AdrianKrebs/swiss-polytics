var express = require("express");

var app = express();

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.listen(process.env.PORT || 8080);
