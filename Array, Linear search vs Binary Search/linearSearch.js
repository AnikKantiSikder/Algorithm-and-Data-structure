/**
 * Linear search
 */

// let arr = [25, 'Anik', true, false, [], 27,
// {}, function() {console.log('Hello');}];

let arr = [25, 'Anik', true, false, [], 27,
{},33, 89, 56];


function linearSearch(){
    let key = 27;
    let flag = false;

    for(let i=0; i<arr.length;i++) {
        // console.log(typeof arr[i]);
        console.log(`I'm ${typeof arr[i]} at index ${i}`);

        if(arr[i] === key) {
            console.log('Key found at index', i);
            flag = true;
            break;
        }
    }
    //console.log(flag);

    if(!flag) {
        console.log('Not found');
        //console.log(flag);
    }
}

linearSearch();