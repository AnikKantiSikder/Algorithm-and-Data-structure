
// Find out flooring and celing value from a sorted array(Descending order)

let arr = [255, 200, 140, 112, 100, 58, 45, 37, 33, 25, 12];

function binarySearch() {
    const key = 300;
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor((left + right) / 2);

    while (left <= right) {
        if (arr[mid] === key) {
            return 'Data found at index: ' + mid;
        }
        else if (arr[mid] > key) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
        mid = Math.floor((left + right) / 2);
    }

    if(arr[mid+1] && arr[mid]) {
        return 'Celing value is: ' + arr[mid] + ' and Flooring value is: ' + arr[mid+1];
    }
    else if (arr[mid+1] && !arr[mid]) {
        return `Flooring vaue is ${arr[mid+1]} But Celing value isn't available for this number`;
    }
    else {
        return `Celing value is: ${arr[mid]} But Flooring value isn't available for this number.`;
    }
}

console.log(binarySearch());