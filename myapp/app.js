const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const indexRoutes  = require('./server/routes/index');

app.use(morgan('tiny'));

//set view engine
app.set("view engine", "ejs");
app.use('/assets', express.static("assets"));

//parse req to body-parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(indexRoutes);


//load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/js', express.static(path.resolve(__dirname, "assets/ks")));

app.use('/', require("./server/routes/router"));

app.listen(3000, ()=>{
    console.log(`Server is running on http://localhost:${3000}`);
});