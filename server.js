let mongoose = require('mongoose');
const Person=require('./Person')
const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'myDB';      // REPLACE WITH YOUR DB NAME
class Database {
  constructor() {
    this._connect()
  }
_connect() {
     mongoose.connect(`mongodb://${server}/${database}`)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}
 Person.create({name:"eva",age:25,favoriteFoods:["salade","burritos"]},{name:"Lin",age:3,favoriteFoods:["soupe","burritos"]})
// const person= new Person()
// person.save().then(doc => {
//     console.log(person)
//   })
//   .catch(err => {
//     console.error(err)
//   })
 
//  find
 Person.find({
    name:"Ali"   // search query
  })
  .then(doc => {
    console.log("Find",doc)
  })
  .catch(err => {
    console.error(err)
  })

// FindOne
 Person.findOne({
      name:"Mohamed"   // search query
})
.then(doc => {
  console.log("Find One",doc)
})
.catch(err => {
  console.error(err)
})
// findById() 
Person.findById({
    _id: "62000c78463f237973824f5e"
}) .then(doc => {
    console.log("By Id",doc)
  })
  .catch(err => {
    console.error(err)
  })
// findOneAndUpdate()
Person.findOneAndUpdate({
    _id: "62000c78463f237973824f5e"
},
{
    name: "Abir"
},
    {
        new: true,                       // return updated doc
        runValidators: true              // validate before update
      })
    .then(doc => {
      console.log(doc)
    })
    .catch(err => {
      console.error(err)
})
// model.findByIdAndRemove
Person
  .findOneAndRemove({
    _id: "620009bfbc0f4d1b02d82983"
  })
  .then(response => {
    console.log("delete",response)
  })
  .catch(err => {
    console.error(err)
  })
  //Delete
//   Person.create({name:"Maria",age:25,favoriteFoods:["hamburger"]},{name:"Maria",age:3,favoriteFoods:["hamburger","soupe"]})
  Person.remove({
      name:"Maria"
  })
  .then(response => {
    console.log("delete",response)
  })
  .catch(err => {
    console.error(err)
  })
//   Search
Person.find({favoriteFoods:"burritos"})                   // find all users
         .skip(100)                // skip the first 100 items
         .limit(2)                // limit to 10 items
         .sort({name: 1} )     // sort ascending by Name
         .select({favoriteFoods: true}) // select Name only
         .exec()                   // execute the query
         .then(docs => {
            console.log(" search",docs)
          })
         .catch(err => {
            console.error(err)
          })
          
module.exports = new Database()