const mongoose = require('mongoose');
const Personschema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFoods: [String]
  })
  
module.exports=mongoose.model("Person",Personschema)