'use strict';

function solution(str){
  return str.split('').reverse().join('');
}

// or //

function solution(str){
  let arr = [];
  let string = str.split('');
  let num = string.length;

  while(num >= 0){
    arr.push(string[num])
    num--
  }
  return arr.join('');
}
