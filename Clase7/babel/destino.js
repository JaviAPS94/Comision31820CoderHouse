"use strict";

var lista = [1, 2, 3, 4, 5];
lista.map(function (number) {
  return number * number;
}).forEach(function (number) {
  return console.log(number);
});
