'use strict';

function high(x){
  let word = [];
  let total = 0;
  let str = x.split(' ');
  let highest = 0;
  let position = 0;

  for(let i = 0; i < str.length; i++){
    console.log(str[i]);
    for(let j = 0; j < str[i].length; j++){
      total += str[i].charCodeAt(j) - 96;
    }
    console.log(total);
    word.push(total);
    total = 0;
  }
  console.log(word);
  for(let k = 0 ; k < word.length ; k++){
    console.log(word[k]);
    if(word[k] > highest){
      highest = word[k];
      position = [k];
      console.log(position);
    }
  }
  return str[position];
}
