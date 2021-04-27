let s = "AAABBB";

function alternatingCharacters(s) {
    let result = 0;

    if (s.length >= 1 && s.length <= 100000) {
         let arr = s.split('');
         let past = arr[0];
         
         arr = arr.filter((item, key) => {
              if (item !== past && key !== 0) {
                   past = item;
                   return item; 
              }  
         });
         result = s.length - [ s.charAt(0), ...arr ].length;
    }
    
    return result; 
}
console.log(alternatingCharacters(s));


// function getDeletionCount(str) {
//     if (!str || !str.length || str.length > 100000) {
//       return 0;
//     }
    
//     const initial = { count: 0, curr: '' };
    
//     const reduceFn = (acc, curr) => {
//       if (curr === acc.curr) {
//         return { ...acc, count: acc.count + 1 };
//       }
//       return { ...acc, curr };
//     };
//     return str.split('').reduce(reduceFn, initial).count;
//   }

// Regex

// const fnc = str => str.length — str.replace(/(A)+|(B)+/g, `$1$2`).length