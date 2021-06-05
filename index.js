function countingValleys(steps, path) {
    // Write your code here
    let count = 0,v =0;
    for(let i =0; i < path.length; i++ ){
        if(path[i] === 'D'){
            count--;
        }else if(path[i] === 'U'){
            count++;
        }
        if(count == 0 && path[i] === 'U'){
            v++;
        }
    }
    return v;
}
countingValleys('UDDDUDUU')
// o/p -> 1
