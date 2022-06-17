
/**
 * Binary search
 */

let arr = [12, 25, 33, 37, 45, 58, 100, 112, 140, 200, 255];

function binarySearch() {
    // 1. left index =0 
    // 2. right index = (length-1) = 10
    // 3. find mid index
    // 4. keyValue === mid
    // 5. keyValue > mid ->Go right
    // 6. keyValue < mid ->Go left
    // 7. update left-right
    // 8. calculate mid value again

    const key = 112;

    let left = 0;
    let right = arr.length -1;
    let mid = Math.floor((left + right) / 2);

    while(left <= right) {
        if(arr[mid] === key) {
            return 'Data found at index ' + mid;
        }
        else if (arr[mid] > key) {
             left = left;
             right = mid - 1;
        }
        else {
            right = right;
            left = mid + 1;
        }

        mid = Math.floor((left + right) / 2);
    }

    return 'Data not found';
}

console.log(binarySearch());