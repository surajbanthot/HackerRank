function repeatedString(s, n) {
    const strLen = s.length;
    let counter = 0;

    const multiplier = Math.floor(n/strLen);

    for(let i=0;i<strLen;i++){
        if(s[i] ==="a"){
            counter++;
        }
    }

    counter*= multiplier;

    const residualStrLen = n - strLen * multiplier;
    for(let i=0;i<residualStrLen;i++){
        if(s[i]=== "a"){
            counter++;
        }
    }
    return counter;
}