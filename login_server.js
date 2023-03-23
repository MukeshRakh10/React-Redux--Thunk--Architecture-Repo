//Its used to devlop the rest API's.
const express = require('express');
const mongo = require('mongodb');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const clientObj = mongo.MongoClient;
//middleware
const token_middleware = (req, res, next) => {
  const headers = req.headers;
  if (headers.token === "dumyToken") {
    next(); // possitive response 
    // if match then it call the login
  }
  else {
    res.send({ "auth": "Authentication failed.." });
  }
}

var db;
clientObj.connect("mongodb+srv://mukesh-10:mukesh-10@cluster0.6uqlv.mongodb.net/redux_middleware?retryWrites=true&w=majority", (err, connection) => {
  if (err) throw err;
  else {
    db = connection.db("redux_middleware");
  }
});

//save
app.post("/signUpSave", (req, res) => {
  console.log("In login method...");
  db.collection("login_details").insertOne({
    "fullname" : req.body.fullname, 
    "email": req.body.email,
    "password": req.body.password
  })
    .then(item => {
      console.log("item saved to database ", item);
      // res.send("item saved to database ");
      res.send({ "login": "Record Save Successfully !!!" });
    })
    .catch(err => {
      res.send({ "login": "Failed to save" });
      // res.status(400).send("unable to save to database");
    });
});

//validate login credintials
app.post("/validateLogin", (req, res) => {
  console.log("In validateLogin Node JS");
  db.collection("login_details")
    .find({
      "email": req.body.email,
      "password": req.body.password
    })
    .toArray((err, array) => {
      if (err) throw err;
      else {
        if (array.length > 0) {
          res.send({ "login": "success" });
        } else {
          res.send({ "login": "failed" });

        }
      }
    })
});

//retrived the product data from server.
// create the get request.
app.get("/products", (req, res) => {
  console.log("In products ...");
  // all records stored into array.
  db.collection("products").find().toArray((err, array) => {
    if (err) throw err;
    else {
      res.send(array);
    }
  })

});

app.listen(8080, () => {
  console.log("Server listening port no 8080 ");
})


