// http://www.codewars.com/?language=javascript
// Correct this code, so that the greet function returns the expected value.

function Person(name){
  this.name = name;
}
 
Person.prototype.greet = function(otherName){
  return "Hi " + otherName + ", my name is " + name;
}

// our answer below:

function Person(name){
  this.name = name;
}

Person.prototype.greet = function(otherName){
  return "Hi " + otherName + ", my name is " + this.name;
};

var p = new Person('mike');
alert(p.greet('newfriend'));