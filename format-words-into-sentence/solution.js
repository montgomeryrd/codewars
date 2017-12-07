'use strict';

function formatWords(words){
  if(!words) return '';

  words = words.filter(v=> v != '');

  if(words.length === 1) return words.join('');

  let sentence = '';

  for (let i = 0; i < words.length; i++) {
    i >= words.length-2? words[i] = `${words[i]} and ${words.pop()}` : words.splice(i,1,`${words[i]},`);
  }

  sentence += words.join(' ');
  return sentence;
}
