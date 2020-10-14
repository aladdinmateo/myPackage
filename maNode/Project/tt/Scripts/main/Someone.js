var $ = require('jquery');
class Someone {
  constructor(names, types) {
    this.name = names;
    this.type = types;
  }

  greet() {
    console.log("hello my name is " + this.name + " and i'm a " + this.type);
  }
}

export default Someone;
//module.exports = Someone;

//
// console.log("hello Someone.js");
//
// exports.exampleProperty = "normal exampleProperty";
// exports.exampleFunction = function() {
//   alert("kwak kwak");
// }
//module.exports = Someone;
