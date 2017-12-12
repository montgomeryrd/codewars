// (roughly) Karen's solution

function cubeOdd(arr) {

  if (arr.length === 0) {
    return;
  }

  let str = (arr.filter(a => (typeof a !== 'string')));

  if (arr.length === str.length) {
    let cubed = arr.filter(y => y % 2).map(x => x * x * x);
    return cubed.reduce((acc, curr) => acc + curr);

  } else {
    return;
  }
}

--------------------------------------------------------------------
// My solution
function cubeOdd(arr) {

  for(let i = 0 ; i < arr.length ; i++){
    if(!Number.isInteger(arr[i])){
      return undefined;
    }
  }

  let q = arr.filter(y => y % 2 === 1 || y % 2 === -1);
  let p = q.map(x => Math.pow(x, 3));
  return p.reduce((acc, curr) => acc + curr);
}

//I included both of what we came up with because every attempt I gave with my solution was returning one fail. I tried Karen's solution and I still got that one fail, but she said her code passed. I went back to my code and attempted again because I just wasn't getting why. THEN IT PASSED! So.............
