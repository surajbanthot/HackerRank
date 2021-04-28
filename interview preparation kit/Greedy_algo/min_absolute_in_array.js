let arr = [1, -3, 71, 68, 17]


function minimumAbsoluteDifference(arr){
    var lowestDiff = Infinity;
    arr.sort((a, b)=> a - b);
    for(var i = 0; i<arr.length - 1; i++){
        lowestDiff = Math.min(lowestDiff, Math.abs(arr[i]- arr[i+1]))
    }
    return lowestDiff;
}

console.log(minimumAbsoluteDifference(arr));