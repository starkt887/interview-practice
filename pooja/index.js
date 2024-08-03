
// for (var i = 0; i <= 5; i++) { 
//   setTimeout(() => console.log(i), 1); 
// }

// var arr1 =[2,1,5,6,2,4,1];
// o/p 1: remove duplicate: [1,2,4,5,6]
// o/p 2: duplicate:[2,1]

var arr1 = [2, 1, 5, 6, 2, 4, 1];
function removeDuplicates() {
    let obj = {}

    let duplicateArr = []
    for (let i = 0; i < arr1.length; i++) {
        if (obj[arr1[i]]) {
            duplicateArr.push(arr1[i])
            continue;
        }
        obj[arr1[i]] = arr1[i]
    }

    console.log(duplicateArr)
    console.log(obj);
}

removeDuplicates()




import React from 'react';
class AlertExample extends React.Component {
    handleClick = () => {
        alert('Hello! This is an alert pop-up.');
    };
    render() {
        return (
            <div>
                <h1>Alert Example</h1>
                <button onClick={this.handleClick}>Show Alert</button></div>
        );
    }
}
export default AlertExample;