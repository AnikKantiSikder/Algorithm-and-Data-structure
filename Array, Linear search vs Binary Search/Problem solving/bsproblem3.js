
// Find out flooring and celing value from a sorted array(Ascending order)

let arr = [12, 25, 33, 37, 45, 58, 100, 112, 140, 200, 255];

function binarySearch() {

    const key = 34;
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor((left + right) / 2);

    while (left <= right) {
        if(arr[mid] === key) {
            return 'Data found at index: ' + mid;
        }
        else if (arr[mid] > key) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
        mid = Math.floor((left + right) / 2);
    }

    if(arr[mid]) {
        return 'Celing value is: ' + arr[mid+1] + ' and Flooring value is: ' + arr[mid];
    } else {
        return 'Celing value is: '+ arr[mid+1] +
        ' But ' + `Flooring value isn't applicable for this number`;
    }
}

console.log(binarySearch());