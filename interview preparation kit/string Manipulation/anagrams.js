let a  = 'cde';
let b = 'dcf';

function makeAnagram(a, b) {
    let map = {}, aCount = 0, bCount = 0;
    for (let i = 0; i < a.length; i++) {
        if (!map[a[i]]) {
            map[a[i]] = 1;
        } else {
            map[a[i]] += 1;
        }
    }
    

    for (let j = 0; j < b.length; j++) {
        if (map[b[j]]) {
            aCount += 1;
            map[b[j]] -= 1;
        } else {
            bCount += 1
        }
    }
 
    return ((a.length - aCount) + bCount);


}

console.log(makeAnagram(a, b));