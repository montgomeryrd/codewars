'use strict';

function capitalize(s,arr){
  let a = s.split('');

  for(let i = 0 ; i < a.length ; i++){
    if(a[arr[i]]){

      a[arr[i]] = a[arr[i]].toString().toUpperCase();
    }
  }
  return a.join('');
};
