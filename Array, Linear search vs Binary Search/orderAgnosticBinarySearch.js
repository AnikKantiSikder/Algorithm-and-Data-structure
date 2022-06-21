
// Ascending order
//let arr = [12, 25, 33, 37, 45, 58, 100, 112, 140, 200, 255];

// Descending order
let arr = [255, 200, 140, 112, 100, 58, 45, 37, 33, 25, 12];


function oaBinarySearch(){
    const key = 50;

    let left = 0;
    let right = arr.length -1;
    let mid = Math.floor((left + right) / 2);

    //let middle = left + Math.floor((right - left) / 2);

    let isAsc;

    if (arr[0] <= arr[arr.length - 1]) {
        isAsc = true;
    } else {
        isAsc = false;
    }

    while (left <= right) {
        if(arr[mid] === key) {
            return 'Data found at index ' + mid;
        }

        if(isAsc) {
            if (arr[mid] > key) {
                left = left;
                right = mid - 1;
            } else {
                right = right;
                left = mid + 1;
            }
        }
        else {
            if(arr[mid] > key) {
                right = right;
                left = mid + 1;
            } else {
                left = left;
                right = mid - 1;
            }
        }
        mid = Math.floor((left + right) / 2);
    }

    return 'Data not found';
}

console.log(oaBinarySearch());