// Input dictionary

let obj = {
    "x": { "y": 100 },
    "some": "whatever",
    "deep": {
        "one": {
            "two": { "three": "this a deeply nested object" }
        }
    }
}

function pathOutput(inpStr) {
    let arr = inpStr.split(".")
    // let keys = Object.keys(obj)
    let result = obj[arr[0]];
    for (let i = 1; i < arr.length; i++) {
        result = result[arr[i]]
    }
    if (result === undefined) {
        console.log("Path not found");
        return;
    }
    console.log(result);

}
pathOutput("deep.one.two.three")

// let result = obj[arr[0]];
// console.log(result);
// result = result[arr[1]];
// console.log(obj[arr[0]][arr[1]]);
// Input string - Output
// --
// "x" - {"y": 100}
// "x.y" - 100
// "deep.one.two" - {"three": "this a deeply nested object"}
// "x.xyz" - "Path not found"
// "deep.one.some_path" - "Path not found"

