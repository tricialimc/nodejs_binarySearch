
function binarySearch(numArr, numSearch){
    let midIndex = Math.floor((numArr.length - 1) / 2);
    let found = false;    
    if (numArr[midIndex] === numSearch){
        console.log("I found the number " + numSearch + "on index: " + midIndex);
    }
    else if(numArr[midIndex] > numSearch){
        console.log("i'm lower");
        for(let i = 0; i < midIndex; i++){                   
            if(numArr[i] === numSearch){
                console.log("I found the number " + numSearch + " on index: " + i); 
                found = true;
            }
        }
    }
    else{
        for(let len = numArr.length - 1; len > midIndex; len--){                   
            if(numArr[len] === numSearch){
                console.log("I found the number " + numSearch + " on index: " + len); 
                found = true;
            }
        }
    }

    if(found != true){
        console.log("The number is not found");
    }
    
}


let numArr = [0, 5, 14, 23, 34, 45, 123, 265, 654];
let numSearch = 1235;
binarySearch(numArr, numSearch);