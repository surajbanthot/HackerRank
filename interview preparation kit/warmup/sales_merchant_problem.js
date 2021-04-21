function sortAndCount(n, arr) {
//   let sorted = arr.sort((a, b) => a - b);
//   let pairs = 0;
//   for (let i = 0; i < n - 1; i++) {
//     if (sorted[i] === sorted[i + 1]) {
//       pairs++;
//       i += 1;
//     }
//   }

let pairs = 0;
const colors = arr.reduce((acc, val) =>{
    (!!acc[val])? acc[val] += 1 : acc[val] = 1;
    return acc;
}, {})
// console.log(colors);

Object.keys(colors).forEach(n=>{
    let _pair = parseInt(colors[n]/2);
    if(_pair >=1 ) pairs += _pair;
})

  return pairs;
}


const n = 9;
const socks = [10, 20, 20, 10, 10, 10, 50, 10, 20];

console.log(`Total: ${sortAndCount(n, socks)} pairs`);

