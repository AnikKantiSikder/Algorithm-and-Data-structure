// Problem: Find target indices after a sorting array

let nums = [1,2,5,2,3];
let target = 2;

 function targetIndices() {
    // Sort in ascending order
    // Linear search
    let resultArray = [];

    nums.sort(function (x,y) {
        return x - y;
    });
    
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            resultArray.push(i);
        }
    }

    return resultArray;
}

console.log(targetIndices());


