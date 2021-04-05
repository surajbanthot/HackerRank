function countingValleys(steps, path) {
    let _steps = path.split("");
    let valleyCount = 0;
    let currentSeaLevel = 0;
    let valleyStatus = false;
    _steps.forEach(step => {
        step ==='U' ? currentSeaLevel++ :currentSeaLevel--;
        if(currentSeaLevel < 0 && !valleyStatus) {
            valleyCount++;
            valleyStatus = true;
        }else if(currentSeaLevel >=0 && valleyStatus){
            valleyStatus = false;
        }
    });

    return valleyCount;
}
const n = 8;
const s = 'UDDDUDUU';

console.log(`No. of valleys: ${countingValleys(n, s)}`)