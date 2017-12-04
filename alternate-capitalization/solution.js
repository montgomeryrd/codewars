'use strict';

function capitalize(s){
  var firstString = '';
  var secondString = '';
  for (var i = 0 ; i < s.length ; i++) {
    firstString += i % 2 == 0 ? s.charAt(i).toUpperCase() : s.charAt(i);
    secondString += i % 2 == 0 ? s.charAt(i) : s.charAt(i).toUpperCase();
  }
  return [firstString, secondString];
};
