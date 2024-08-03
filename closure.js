

// function operation(a, b) {
//     let num1 = a, num2 = b;
//     console.log(num1, num2)
//     return function (num1, num2) {
//         console.log(this.num1, this.num2)
//         // console.log(a * b);
//     }
// }

// function multiply(a, b) {
//     console.log(a * b)
// }
// function operation2(fn) {
//     let a = 10, b = 10;
//     return fn(a, b)
// }



// let opr = operation2(multiply)
// console.log(opr)


// const arr =[1....n]
// const array = [2,3,4,5,5,7,8,7]

function App() {
    const [Data, setData] = useState("")

    function opeartion(params) {
    }

    const displayMsg = useCallback(
        (msg) => {
            console.log("Use callback,", msg)
        },
        [Data],
    )

    return <>
        <p>{Data}</p>
        <input type="text" onChange={(e) => setData(e.target.value)} />
        <button onClick={displayMsg}>Submit</button>
    </>
}

const verifyAuth = (token) => {
    if (req.token) {
         next   
    }
    else
    throw new Error("401: Unauthrorized request")
}

app.post("/download", verifyAuth,chkRole, (req, res) => {

    

})



