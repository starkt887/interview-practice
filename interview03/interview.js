const array = [99, 25, 34, 67, 67, 82, 67, 34, 25, 41, 54, 34]
// output: array = [99, 25, 82, 41, 54]

//ignore values with occurence >=3


function uniqueVals(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]] += 1
        }
        else {
            obj[arr[i]] = 1
        }
    }
    let ouputArr = []
    let keys = Object.keys(obj)
    keys.forEach(key => {
        if (obj[key] < 3) {
            ouputArr.push(key)
        }
    });
    console.log(ouputArr);
}

uniqueVals(array)
