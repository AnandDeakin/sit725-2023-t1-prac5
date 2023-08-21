let client = require("../dbconnection");
let dbcollection = client.db().collection("city"); 

function addCity(city, callBack) {
    dbcollection.insertOne(city, callBack);
    console.log(city)
  }

function getAllCities(callBack) {
  dbcollection.find({}).toArray(callBack);
}




module.exports = { addCity , getAllCities }


