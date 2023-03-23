//require() => It is predefined function used to import the modules.

const express = require("express");
const mongodb1 = require("mongodb");
const cors = require("cors");
/*express : 
   create the rest object 
   rest object used to devlop the rest services
*/
const app = express();
// app is called as rest object.
// app object used to develop the rest services.
//enabled the cors policies ..
app.use(cors());
// enalbed the cors policy
//cors() enabled the communication between the ports.
//..............
/*
  app.use(express.json()) : 
    express .json() :
    //set  the JSON as MIME  Type 
    // MIME TYPE : Communication language between server and client.
*/
app.use(express.json());
//...........................
//create the client object :
const clientObj = mongodb1.MongoClient;
/*
    clientObj is the client object.
    By using the clientObj we can connect to the database object.   
*/

//...........................
// create the get request.
app.get("/products", (req, res) => {
    clientObj.connect("mongodb+srv://mukesh-10:mukesh-10@cluster0.6uqlv.mongodb.net/redux_middleware?retryWrites=true&w=majority",
        (err, connection) => {
            if (err) throw err;
            else {
                console.log("Connection Sucessfully Created ....");
                const db = connection.db("redux_middleware");
                // all records stored into array.
                db.collection("products").find().toArray((err,array)=>{
                        if(err) throw err;
                        else {
                            res.send(array);
                        }
                })
            }

        });
});
app.listen(8080,()=>{
    console.log("Server listening port no 8080 ");
})



