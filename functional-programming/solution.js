'use strict'

function double(array) {
 return array.map(x => x * 2);
}


function filter_list(l){
  return l.filter(num => Number.isInteger(num));
}


function find_average(array) {
  return array.reduce((acc, curr) => (acc + curr))/array.length;
}
