'use strict';
//This first function was the first one we came up with. The tests pass so long as there is no null value.
function abbrevName(name){
    return name.match(/\b[A-Z]/g).join('.');
}

//This function, however, is the one that passes every test, ever.
function abbrevName(name){
  let abbr = name.split(' ');
  return `${abbr[0].charAt(0).toUpperCase()}.${abbr[1].charAt(0).toUpperCase()}`;
}
