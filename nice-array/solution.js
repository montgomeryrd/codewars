'use strict';

function isNice(arr){
  let nice = true;

  if(arr.length === 0){
    return false;
  }

  for(var i = 0 ; i < arr.length ; i++){
    if(!arr.includes(arr[i] + 1) && !arr.includes(arr[i] - 1)){
     nice = false;
    }
  }
  return nice;
}
