"use strict";

var name = "Ishan";
var greeting = "Good Evening!!";
var surname = "David Jr.";
var calculateAge = function calculateAge(year) {
  return new Date().getFullYear() - year;
};
console.log(greeting + " ! Name:" + name + " age: " + calculateAge(1979));