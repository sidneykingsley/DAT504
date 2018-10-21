const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const url = "mongodb://localhost:27017/clothingItems";
const port = 4000;


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('client'));
app.get('/', function(req, res){
  res.sendFile(__dirname + 'http://localhost:4000/');
});

app.post('/addItems', function(req, res){
  db.collection("items").insertOne(req.body, function(err, result){
    if (err) throw err;
    console.log("Saved");
    res.redirect('back');
  })
})

app.get('/getItems', function(req, res){
  db.collection("items").find().toArray(function(err, result){
      if (err) throw err;
      res.send(result);
  });
});


MongoClient.connect(url, function(err, client){
  if (err) throw err;
  console.log("Connection to DB Successful");
  db = client.db("clothingItems");
})

app.listen(port, function() {
  console.log(`App Listening on Port ${port}`)
})
