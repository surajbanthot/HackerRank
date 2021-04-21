function arrayManipulation(n, queries) {
    // Alternative Arrya creation
    // const arr = '0'.repeat(n).split('').map((e) => parseInt(e));
    let zeroArr = '0'.repeat(n).split('').map((e) => parseInt(e));
    for (let j = 0; j < queries.length; j++) {
         let startIndex = queries[j][0];
         let endIndex = queries[j][1];
         let numberToAdd = queries[j][2];
         for (let i = 0; i < n; i++) {
            let index = i + 1;
            if (index >= startIndex && index <= endIndex) {
            zeroArr[i] += numberToAdd;
            }
          }
       }
    return Math.max(...zeroArr);
    }

// optimized solution
    
    const arr = Array(n + 1);
    let maxValue = 0,
    currentNumber = 0;
    queries.forEach(([startRange, endRange, value]) => {
         arr[startRange] = arr[startRange] || { start: 0, end: 0 };
         arr[endRange] = arr[endRange] || { start: 0, end: 0 };
         arr[startRange].start += value;
         arr[endRange].end += value;
     });
    arr.forEach((cell) => {
       if (cell) {
         currentNumber += cell.start;
         if (currentNumber > maxValue) {
            maxValue = currentNumber;
         }
         currentNumber -= cell.end;
     }
   });
 return maxValue;