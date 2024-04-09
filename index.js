const express = require("express");
const cors = require ("cors")
// const fs = require ("fs");
const json = require("./JSON/file.json");
require('colors');

const app = express();
const port = 3001;
const corsOptions = {
    origin : "http://localhost:5173",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const jsonData =require("./JSON/file.json");



app.get('/', cors(corsOptions), (req, res) => {
    res.send('<h4> Hello World!!! </h4>');
});


    // Define your routes or use jsonData as needed
    app.get('/pokemon', cors(corsOptions), (req, res) => {
        res.json(jsonData);
    });

    app.get('/pokemon/:id', cors(corsOptions), (req, res) => {
        const id = req.params.id;
        const pokemon = jsonData.find(p => p.id == id);
        if (pokemon) {
            res.json(pokemon);
        } else {
            res.status(404).json({ message: "Pokemon not found" });
        }
    });

//     app.get('/pokemon/:id', (req, res) => {

//         try {  
            
//             const {info} = req.params;

//             const query = {};

//         }

      
//         const id = req.params.id;
//         const pokemon = jsonData.find(p => p.id == id);
//         if (pokemon) {
//             res.json(pokemon);
//         } else {
//             res.status(404).json({ message: "Pokemon not found" });
//         }
//     });


    
// const get('pokemon/:id', (req, res) => {
//     try {

//         const {code} = req.params;

//         const query = {};

//          if (code.length === 2) query.alpha2Code = code
//          if (code.length === 3) query.alpha3Code = code

//          console.log(query)

//         const country = await Country.findOne(query);
//         // const country = await Country.findOne({alpha2Code: code});

//         res.json(country);
//     } catch (error) {
//         console.log(error);
//         res.status(500).send("Something has gone wrong!!!")
//     }
// };



    // Start the server once JSON data is loaded
    app.listen(port, () => {
        console.log(`Pokemon app listening on port ${port}`.bgYellow);
    });
