let model = require("../model/model");

const getAllCities = (req, res) => {
  model.getAllCities((error, result) => {
    if (!error) {
      res.json({ statusCode: 200, data: result, message: "success!" });
    } else {
      console.log(error);
    }
  });
};

const addCity = (req, res) => {
    let city = req.body;
    model.addCity(city, (error, result) => {
      if (!error) {
        res.json({ statusCode: 200, data: result, message: "Added" });
      } else {
        console.log(error);
        res.json({ statusCode: 400, data: error, message: "Failed" });
      }
    });
  };

  module.exports = {addCity,getAllCities}