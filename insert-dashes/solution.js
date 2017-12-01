'use strict';

function insertDash(num) {
  var str = num.toString();
  var arr = [str[0]];

  for(var i = 1; i < str.length ; i++){
    if((str[i - 1] % 2 === 1) && (str[i] % 2 === 1)){
      arr.push('-', str[i]);
    }else{
      arr.push(str[i]);
    }
  }
  return arr.join('');
}
