'use strict';

function mutateMyStrings(stringOne, stringTwo){
  let one = stringOne.split('');
  let two = stringTwo.split('');
  let answer = (stringOne + '\n');
  console.log(one);
  console.log(two);

  for (let i = 0 ; i < one.length ; i++) {
    if (one[i] !== two[i]) {
      one[i] = two[i];
      answer = answer.concat(one.join('') + '\n');
    }
  }
  return answer;
}
