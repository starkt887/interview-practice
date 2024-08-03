// [1,2,3,1,2,5,4,3,6,2,6,2,3,5,4,6]
// {1:2, 2:4,3:3, ....}


function objSetup(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        let num = obj[arr[i]]
        if (!isNaN(num))
            obj[arr[i]] += 1;
        else
            obj[arr[i]] = 1;
    }
    console.log(obj);
}

objSetup([1, 2, 3, 1, 2, 5, 4, 3, 6, 2, 6, 2, 3, 5, 4, 6])